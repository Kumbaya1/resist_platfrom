import React from 'react';
import { Modal } from "antd-mobile"
import L from "leaflet"
import { MapContainer, MapWrap, MapUtilsWrap, MapUtil } from "./styled"
import { bjxq } from './mapdata/bjxq'
import { yqpoi } from './mapdata/yiqingpoi'
import BarChart from "../BarChart"
import RadarChart from "../RadarChart"
import './leaflet-style.css'
import 'leaflet-search'
import 'leaflet-search/dist/leaflet-search.src.css'
class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            map: React.createRef(),
            id: "map",
            height: 0,
            instance: null,
            modalBar: false,    // 小区排名条形图
            modalRadar: false,   // 雷达图
            radarTitle: "雷达图标题",
            renderFieldList: ['A传播风险', 'B医疗资源', 'C服务治理', 'D居民构成', '总分N'],
            rankFieldList: ['A排名', 'B排名', 'C排名', 'D排名', '总分排名'],
            rankData: [],
            radarData: [],
            radarScore: 0,
            radarTips: "",
            radarTotalscorerank: "0",
            diffHeight: 125
        }
    }
    getBarName() {
        return `小区按${this.props.rankTypeName}评分排名TOP20`;
    }
    // 放大/缩小地图zoom
    changeZoom(type = 'add') {
        const zoom = this.state.instance.getZoom();
        if (type === "add") {
            this.state.instance.setZoom(zoom + 1);
        } else {
            this.state.instance.setZoom((zoom - 1) < 1 ? 1 : (zoom - 1));
        }
    }
    // 地图容器尺寸调整
    changeMapContainer() {
        this.props.changeMapFull();
        const diffHeight = this.state.diffHeight === 125 ? 32 : 125;
        this.setState({
            diffHeight
        })
        // this.comHeight();
    }
    getBrowserInterfaceSize() {
        var pageWidth = window.innerWidth;
        var pageHeight = window.screen.availHeight;

        // if (typeof pageWidth !== "number") {
        //     //在标准模式下面
        //     if (document.compatMode === "CSS1Compat") {
        //         pageWidth = document.documentElement.clientWidth;
        //         pageHeight = document.documentElement.clientHeight;
        //     } else {
        //         pageWidth = document.body.clientWidth;
        //         pageHeight = window.body.clientHeight;
        //     }
        // }

        return {
            pageWidth: pageWidth,
            pageHeight: pageHeight
        }
    }
    comHeight(cb) {
        const height = this.getBrowserInterfaceSize().pageHeight;
        const rect = this.state.map.current.getBoundingClientRect();
        if (cb) {
            this.setState({
                height: height - rect.top - 2
            }, cb)
        } else {
            this.setState({
                height: height - rect.top - 2
            })
        }
    }
    changeRankDialog(type, flag) {
        this.setState({
            [`modal${type}`]: flag
        })
        let field = this.state.rankFieldList[this.props.activeIndex]
        let layers = this.state.rendererLayer.getLayers()
        let rankData = []
        for (let i = 0; i < layers.length; i++) {
            let properties = layers[i].feature.properties
            rankData.push({
                name: properties['社区名称'],
                rank: properties[field]
            })
        }
        rankData.sort((a, b) => {
            return a.rank - b.rank
        })
        this.setState({
            rankData: rankData.slice(0, 20)
        })
    }
    componentDidMount() {
        let self = this;
        this.comHeight(() => {
            const map = L.map('map').setView([40.054503749861944, 116.4022082099109], 14)
            map.zoomControl.remove();
            map.attributionControl.remove();
            // const url = "http://192.168.31.87:8085/geoserver/ncov/wms";
            // const params = {
            //     service: 'WFS',
            //     version: '1.1.0',
            //     request: 'GetFeature',
            //     typeName: "BeijingCommunity",
            //     outputFormat: 'application/json',
            //     srsName: "EPSG:4326"
            // }
            // const paramsBeijing = {
            //     service: 'WFS',
            //     version: '1.1.0',
            //     request: 'GetFeature',
            //     typeName: "Beijing",
            //     outputFormat: 'application/json',
            //     srsName: "EPSG:4326"
            // }
            // const url_str = url + L.Util.getParamString(params, url);
            // const url_str_beijing = url + L.Util.getParamString(paramsBeijing, url);
            // fetch(url_str, {
            //     method: "GET",
            // }).then(res => {
            //     return res.json()
            // }).then(geojson => {
            //     let layer = L.geoJson(geojson, {
            //         onEachFeature: (feature, layer) => {
            //             const { name } = feature.properties;
            //             layer.bindPopup(`<button onclick="alert('当前索引${this.props.activeIndex},0:传播风险，1:医疗资源，2:服务治理,3:居民构成,4:抵抗力总分')">${name}</button>`);
            //         }
            //     })
            //     layer.addTo(map)
            // })
            // fetch(url_str_beijing, {
            //     method: "GET",
            // }).then(res => {
            //     return res.json()
            // }).then(geojson => {
            //     let layer = L.geoJson(geojson, {})
            //     layer.addTo(map)
            // })


            // // 贾道祥 示例
            // 自定义定位点图标
            const myCustomColour = '#009366'//'#583470'

            const markerHtmlStyles = `
                background-color: ${myCustomColour};
                width: 2rem;
                height: 2rem;
                display: block;
                left: -1.5rem;
                top: -1.5rem;
                position: relative;
                border-radius: 2rem 2rem 0;
                transform: rotate(45deg);
                border: 1px solid #FFFFFF`

            const divIcon = L.divIcon({
                className: "my-custom-pin",
                iconAnchor: [0, 24],
                labelAnchor: [-6, 0],
                popupAnchor: [0, -36],
                html: `<span style="${markerHtmlStyles}" />`
            })
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            // 疫情点
            L.geoJSON(yqpoi, {
                pointToLayer: function (geoJSONPoint, latlng) {
                    return L.marker(latlng, { icon: divIcon })
                }
            }).addTo(map)
            //初始化图层，设置style，onEachFeature要素绑定
            let featuresLayer = L.geoJson(bjxq, {
                style: style,
                onEachFeature: onEachFeature
            }).addTo(map);

            let markersLayer = new L.featureGroup();
            map.addLayer(markersLayer);
            let searchControl = new L.Control.Search({
                textPlaceholder: "搜索社区",
                textCancel: "清除",
                textErr: "未找到社区",
                layer: featuresLayer,
                propertyName: "社区名称",
                position: "topright",
                marker: false,
                moveToLocation: function (latlng, title, map) {
                    markersLayer.clearLayers();
                    let feature = latlng.layer.feature
                    let popupContent = getPopupContent(feature)

                    let marker = new L.Marker(latlng, { icon: divIcon }).addTo(map).bindPopup(popupContent).openPopup();
                    markersLayer.addLayer(marker);
                    var zoom = map.getBoundsZoom(latlng.layer.getBounds());
                    map.setView(latlng, zoom); // access the zoom
                }
            });

            // 格式化弹窗内容
            function getPopupContent(feature) {
                // let fieldlist = ['A传播风险', 'B医疗资源', 'C服务治理', 'D居民构成', '总分N']
                // let scoreField = fieldlist[self.props.activeIndex] // 此处索引最好是当前指标索引
                let properties = feature.properties
                let tipA1 = properties['A1提示']
                let tipA2 = properties['A2提示']
                let tipA3 = properties['A3提示']
                let tipB1 = properties['B1提示']
                let tipB2 = properties['B2提示']
                let tipC1 = properties['C1提示']
                let tipC2 = properties['C2提示']
                let tipD1 = properties['D1提示']
                let tipD2 = properties['D2提示']
                let scoreA = properties['A传播风险']
                let scoreB = properties['B医疗资源']
                let scoreC = properties['C服务治理']
                let scoreD = properties['D居民构成']
                let totalScore = properties['总分N']
                let totalScoreRank = properties['总分排名']
                let tips = "";
                if (tipA1) {
                    tips += "," + tipA1
                }
                if (tipA2) {
                    tips += "," + tipA2
                }
                if (tipA3) {
                    tips += "," + tipA3
                }
                if (tipB1) {
                    tips += "," + tipB1
                }
                if (tipB2) {
                    tips += "," + tipB2
                }
                if (tipC1) {
                    tips += "," + tipC1
                }
                if (tipC2) {
                    tips += "," + tipC2
                }
                // if (tipD1) {
                //     tips += "," + tipD1
                // }
                if (tipD2) {
                    tips += "," + tipD2
                }
                tips = tips.substring(1);
                let popupContent = "";
                // const names = ["暴露情况总分","医疗资源总分","服务治理总分","居民构成总分","抵抗力总分"];
                if (properties && properties['社区名称']) {
                    popupContent += "<p>" + properties['社区名称'] + "</p>"
                    // popupContent += "<p>抵抗力评分：" + properties[scoreField].toFixed(2) + "</p>";
                    popupContent += "<p class='replace'>抵抗力评分:分数占位符</p>";
                    popupContent += `<button id='detailBtn' class='detailBtn' data-scorea=${scoreA}  data-scoreb=${scoreB} data-scorec=${scoreC} data-scored=${scoreD} data-tips=${tips}  data-name=${properties['社区名称']}  data-score=${totalScore} data-totalscorerank=${totalScoreRank} style='color:#fff;cursor:pointer;background: transparent;border-right:0px;border-bottom: 1px solid #fff;border-left:0px;border-top:0px;'>详细情况> </button>`
                }
                return popupContent
            }
            //创建图例
            var legend = L.control({ position: 'bottomright' });
            legend.onAdd = function (map) {
                //创建图例div
                var div = L.DomUtil.create('div', 'info legend'),
                    grades = [100, 70, 50, 30, 10, 0],
                    labels = [],
                    from, to;
                for (var i = 0; i < grades.length - 1; i++) {
                    from = grades[i + 1];
                    to = grades[i];
                    labels.push(
                        '<i style="background:' + getColor(from + 1) + '"></i> ' +
                        from + '&ndash;' + to);// (to>=0 ? '&ndash;' + from : '+'));
                }
                div.innerHTML = labels.join('<div style="margin-bottom:2px"></div>');
                return div;
            };
            //添加图例
            legend.addTo(map);

            //图层样式
            function style(feature) {
                return {
                    weight: 1,
                    opacity: 1,
                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 0.7,
                    fillColor: getColor(feature.properties['A传播风险'])
                };
            }
            function getColor(d) {
                return d > 70 ? '#800026' :
                    d > 50 ? '#E31A1C' :
                        d > 30 ? '#FC4E2A' :
                            d > 10 ? '#FD8D3C' :
                                '#FFEDA0';
            }
            //根据要素属性设置特殊渲染样式
            function highlightFeature(e) {
                var layer = e.target;

                layer.setStyle({
                    weight: 2,
                    color: 'blue',
                    opacity: 0.7,
                    dashArray: '',
                    fillOpacity: 0.7
                });

                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    layer.bringToFront();
                }
            }

            //重置要素样式
            function resetHighlight(e) {
                featuresLayer.resetStyle(e.target);
            }
            //缩放到要素范围
            function zoomToFeature(e) {
                markersLayer.clearLayers();
                map.fitBounds(e.target.getBounds());
            }
            //每个要素绑定事件
            function onEachFeature(feature, layer) {
                layer.on({
                    mouseover: highlightFeature,//鼠标移动上去高亮
                    mouseout: resetHighlight,//鼠标移出还原
                    click: zoomToFeature//单击要素缩放到要素范围
                });
                var popupContent = getPopupContent(feature)
                layer.bindPopup(popupContent);
            }

            map.on("popupopen", function () {
                const names = ["暴露情况总分", "医疗资源总分", "服务治理总分", "居民构成总分", "抵抗力总分"];
                const mapKeys = ["a", "b", "c", "d", ""];
                const htmlStr = map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]].getContent();
                let div = document.createElement("div");
                div.innerHTML = htmlStr;
                const p = div.querySelector(".replace");
                const btn = div.querySelector("button");
                p.innerText = names[self.props.activeIndex] + ":" + parseFloat(btn.getAttribute(`data-score${mapKeys[self.props.activeIndex]}`)).toFixed(2)
                map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]].setContent(div.innerHTML);
                document.querySelectorAll(".detailBtn").forEach(item => {
                    item.onclick = function (e) {
                        const btn = e.target;
                        self.setState({
                            modalRadar: true,
                            radarTips: btn.getAttribute("data-tips"),
                            radarScore: btn.getAttribute("data-score"),
                            radarTitle: btn.getAttribute("data-name"),
                            radarTotalscorerank: btn.getAttribute("data-totalscorerank"),
                            radarData: [btn.getAttribute("data-scorea"), btn.getAttribute("data-scoreb"), btn.getAttribute("data-scorec"), btn.getAttribute("data-scored")]
                        })
                    }
                })
            });
            // searchControl.on('search:locationfound', function(e) {
            //     e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
            //     if(e.layer._popup)
            //         e.layer.openPopup();
            // }).on('search:collapsed', function(e) {

            //     featuresLayer.eachLayer(function(layer) {	//restore feature color
            //         featuresLayer.resetStyle(layer);
            //     });	
            // });

            map.addControl(searchControl);  //inizialize search control

            this.setState({
                instance: map,
                rendererLayer: featuresLayer,
                markersLayer: markersLayer,
                searchControl: searchControl
            })

        })
    }
    searchDistrict(value) {
        this.state.searchControl.searchText(value)
        console.log(`输入框提交的内容:${value}`)
    }

    // 根据属性范围设置渲染颜色
    getColor(d) {
        // 红色色系
        return d > 70 ? '#800026' :
            //  d > 50 ? '#BD0026' :
            d > 50 ? '#E31A1C' :
                d > 30 ? '#FC4E2A' :
                    d > 10 ? '#FD8D3C' :
                        // d > 30 ? '#FEB24C' :
                        // d > 10 ? '#FED976' :
                        '#FFEDA0';
        //绿色色系
        // return d > 70 ? '#024822':
        //     d > 50 ? '#027C3E':
        //     d > 30 ? '#03CA60':
        //     d > 10 ? '#11FF84':
        //             '#99FFCB'
    }
    // 切换不同指标地图
    switchIndexMap(index) {
        let fieldlist = ['A传播风险', 'B医疗资源', 'C服务治理', 'D居民构成', '总分N']
        let renderField = fieldlist[index]
        let self = this
        let featuresLayer = this.state.rendererLayer
        featuresLayer.setStyle(function (feature) {
            return {
                weight: 1,
                opacity: 1,
                color: 'white',
                dashArray: '0',
                fillOpacity: 0.6,
                fillColor: self.getColor(feature.properties[renderField])
            };
        })
        this.setState({
            index: index
        })
    }
    render() {
        const rankDetail = ["排名高的小区疫情传播风险相对较小", "排名高的小区周边医疗资源相对较好", "排名高的小区治理服务相对较好", "排名高的小区居民构成对抗击疫情较为有利", "排名高的小区对疫情的抵抗力相对较强"];
        return (
            <MapWrap >
                <MapUtilsWrap >
                    <MapUtil onClick={() => { this.changeMapContainer() }}> <i className="iconfont">&#xe666;</i> </MapUtil>
                    {/* <MapUtil onClick={() => { this.changeZoom("add") }}> <i className="iconfont">&#xe627;</i> </MapUtil> */}
                    {/* <MapUtil onClick={() => { this.changeZoom("reduce") }}><i className="iconfont">&#xe660;</i> </MapUtil> */}
                    <MapUtil onClick={() => { this.changeRankDialog('Bar', true) }}><i className="iconfont">&#xe7da;</i> </MapUtil>
                </MapUtilsWrap>
                <MapContainer ref={this.state.map} id={this.state.id} diffHeight={this.state.diffHeight}></MapContainer>
                <Modal
                    visible={this.state.modalBar}
                    closable={true}
                    transparent={true}
                    title={this.getBarName()}
                    onClose={() => { this.changeRankDialog('Bar', false) }}
                    style={{ width: "95%" }}
                >
                    <div style={{ textAlign: "right", color: "#aaa", fontSize: "12px" }}>*{rankDetail[this.props.activeIndex]}</div>
                    <BarChart rankData={this.state.rankData} title={this.state.rankTitle}></BarChart>
                </Modal>
                <Modal
                    visible={this.state.modalRadar}
                    closable={true}
                    transparent={true}
                    title={this.state.radarTitle}
                    onClose={() => { this.changeRankDialog('Radar', false) }}
                    style={{ width: "95%" }}
                >
                    <span style={{ color: "rgb(0,174,102)" }}>抵抗力总分:{parseFloat(this.state.radarScore).toFixed(2)}</span><br />
                    <span style={{ color: "rgb(0,174,102)" }}>排名:{this.state.radarTotalscorerank}/6727</span>

                    <RadarChart radarData={this.state.radarData}></RadarChart>
                    {this.state.radarTips.split(",").length > 0 ? (<p style={{ color: "rgb(170, 170, 170)", fontSize: "12px", textAlign: "left" }}>重点防范</p>) : ""}
                    {this.state.radarTips.split(",").map((item, index) => {
                        return (
                            <div key={index} style={{ color: "rgb(0,174,102)", textAlign: "left", fontSize: "12px" }} >·{item}</div>
                        )
                    })}
                </Modal>
            </MapWrap >
        )
    }
}

export default Map