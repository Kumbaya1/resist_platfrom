import React from 'react';
import { Modal } from "antd-mobile"
import L from "leaflet"
import { Map as Amap } from 'react-amap'
import { MapContainer, MapWrap, Tip } from "./styled"
import { yqpoi } from './mapdata/yiqingpoi'
// import BarChart from "../BarChart"
import RadarChart from "../RadarChart"
import MTable from "../MTable"
import './leaflet-style.css'
import 'leaflet-search'
import 'leaflet-search/dist/leaflet-search.src.css'
import markerIcon from '../../assets/images/yiqingpoi2.png'
import hospitalIcon from '../../assets/images/hospital_green.png'
import locationIcon from '../../assets/images/loc.png'
import hospital from './mapdata/hospital'
import 'leaflet.locatecontrol'
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
            scoreFieldList: ['总分', '风险规避', '医疗资源', '服务治理', '居民特征'],
            rankFieldList: ['r总分', 'r风险规避', 'r医疗资源', 'r服务治理', 'r居民特征', '预测分段'],
            titleList: ['抵抗力总分排名', '风险规避排名', '医疗资源排名', '服务治理排名', '居民特征排名', '疫情发生概率'],
            rankData: [],
            radarData: [],
            radarScore: 0,
            radarTips: "",
            radarTotalscorerank: "0",
            diffHeight: 66,
            head: [
                {
                    label: "排名",
                    prop: "rank"
                }, {
                    label: "小区名称",
                    prop: "name"
                }, {
                    label: "评分",
                    prop: "score"
                }
            ],
            head1: [{
                label: "小区名称",
                prop: "name"
            }, {
                label: "评分",
                prop: "score"
            }],
            center: { longitude: 115, latitude: 30 },
        }
        // 高德地图 Map 实例
        this.mapInstance = undefined;
        // 地图定位点
        this.locPoint = L.featureGroup().on('click', function (e) {
            // console.log(e)
            //  alert('Clicked on a member of the group!');
        })

    }
    getBarName() {
        if (this.props.rankTypeName === "疫情发生概率预测") {
            return "小区按疫情发生概率预测排名"
        } else {
            return `小区按${this.props.rankTypeName}评分排名TOP20`;
        }
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
        const diffHeight = this.state.diffHeight === 92 ? 0 : 127;
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
        if (!this.state.rendererLayer || !this.state.rendererLayer.getLayers) {
            return
        }
        this.setState({
            [`modal${type}`]: flag
        })
        if (this.props.activeIndex === -1) {
            // 小区按疫情发生概率预测排名 
            // TODO...
        } else {
            let scoreField = this.state.scoreFieldList[this.props.activeIndex]
            let rankfield = this.state.rankFieldList[this.props.activeIndex]
            let layers = this.state.rendererLayer.getLayers()
            let rankData = []
            for (let i = 0; i < layers.length; i++) {
                let properties = layers[i].feature.properties
                rankData.push({
                    name: properties['社区名称'],
                    score: parseInt(properties[scoreField]),
                    // score: properties[scoreField].toFixed(2),
                    rank: properties[rankfield]
                })
            }
            rankData.sort((a, b) => {
                return a.rank - b.rank
            })
            console.log(rankData.slice(0, 20))
            this.setState({
                rankData: rankData.slice(0, 20)
            })
        }

    }
    // 地图定位
    reLocate(isClick) {
        let self = this
        let map = this.state.instance
        let positionIcon = L.icon({
            iconUrl: locationIcon,
            iconSize: [23, 23],
            // iconAnchor: [20, 20]
        })
        //eslint-disable-next-line
        AMap.plugin('AMap.Geolocation', function () {
            //eslint-disable-next-line
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                buttonPosition: 'RB',    //定位按钮的停靠位置
                //eslint-disable-next-line
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

            });
            self.mapInstance.addControl(geolocation);
            geolocation.getCurrentPosition(function (status, result) {
                if (status === 'complete') {
                    self.locPoint.clearLayers()
                    //解析定位结果
                    let lng = result.position.lng
                    let lat = result.position.lat
                    let loc = [lat, lng]
                    self.state.currentLocation = loc;
                    let latlng = new L.latLng(loc)

                    self.locPoint.addLayer(L.marker(latlng, { icon: positionIcon }));
                    self.locPoint.addLayer(L.circle(latlng, {
                        radius: 1000,
                        weight: 0,
                        fillOpacity: 0.3
                    }));
                    if (isClick) {
                        var zoom = map.getZoom();
                        map.setView(latlng, zoom + 6);
                    }
                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        self.locPoint.bringToBack()
                    }

                } else {
                    alert(result.message)
                }
            });
        });
    }
    // 疫情预测
    forecastPlague() {
        this.switchIndexMap(5)
    }
    componentDidMount() {
        let self = this;
        this.comHeight(() => {
            const map = L.map('map', {}).setView([39.904503749861944, 116.4022082099109], 10)
            //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            //     id: 'mapbox.light',
            // }).addTo(map);
            L.tileLayer('http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 16
            }).addTo(map)
            map.zoomControl.remove();
            map.attributionControl.remove();
            self.locPoint.addTo(map);
            self.amapEvents = {
                created: mapInstance => {
                    self.mapInstance = mapInstance;
                    //eslint-disable-next-line
                    self.reLocate()
                }
            };
            const url = "http://39.98.108.189:9528/geoserver/ncov/wms";
            const params = {
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                typeName: "BeijingCommunity",
                outputFormat: 'application/json',
                srsName: "EPSG:4326"
            }
            const url_str = url + L.Util.getParamString(params, url);
            fetch(url_str, {
                method: "GET",
            }).then(res => {
                return res.json()
            }).then(geojson => {
                let curObj = self
                console.log(curObj)
                // 自定义定位点图标
                const myCustomColour = '#FF0000'//'#009366'//'#583470'
                const markerHtmlStyles = `
                    background-color: ${myCustomColour};
                    width: 0.8rem;
                    height: 0.8rem;
                    display: block;
                    left: -1.5rem;
                    top: -1.5rem;
                    position: relative;
                    border-radius: 1rem 1rem 0;
                    transform: rotate(45deg);
                    border: 1px solid #FFFFFF`
                const divIcon = L.divIcon({
                    className: "my-custom-pin",
                    // iconAnchor: [0, 24],
                    labelAnchor: [-6, 0],
                    popupAnchor: [-23, -24],
                    html: `<span style="${markerHtmlStyles}" />`
                })
                const yqIcon = L.icon({
                    iconUrl: markerIcon,
                    iconSize: [20, 20],
                    // iconAnchor: [20, 20]
                })
                const hosIcon = L.icon({
                    iconUrl: hospitalIcon,
                    iconSize: [20, 20],
                    // iconAnchor: [20, 20]
                })
                // 疫情点
                let yqLayer = L.geoJSON(yqpoi, {
                    pointToLayer: function (geoJSONPoint, latlng) {
                        let name = geoJSONPoint.properties['name']
                        let marker = L.marker(latlng, { icon: yqIcon })
                        return marker.bindTooltip(`<p>${name}(已现疫情)</p>`, { direction: 'top' })//.openTooltip()
                    }
                }).addTo(map)


                let hospitalLayer = new L.featureGroup()
                for (let i in hospital) {
                    var name = hospital[i].name,	//value searched
                        loc = hospital[i].location,		//position found
                        marker = new L.Marker(new L.latLng(loc), { icon: hosIcon });//se property searched
                    marker.bindTooltip(`<p>${name}</p>`, { direction: 'top' });
                    hospitalLayer.addLayer(marker);
                }
                //hospitalLayer.addTo(map)

                //初始化图层，设置style，onEachFeature要素绑定
                let featuresLayer = L.geoJson(geojson, {
                    style: style,
                    onEachFeature: onEachFeature
                }).addTo(map);
                let markersLayer = new L.featureGroup();
                map.addLayer(markersLayer);
                let searchControl = new L.Control.Search({
                    textPlaceholder: "请输入小区名称进行搜索",
                    textCancel: "清除",
                    textErr: "未找到社区",
                    layer: featuresLayer,
                    propertyName: "社区名称",
                    position: "topright",
                    marker: false,
                    collapsed: false,
                    moveToLocation: function (latlng, title, map) {
                        markersLayer.clearLayers();
                        let feature = latlng.layer.feature
                        let popupContent = getPopupContent(feature)

                        let marker = new L.Marker(latlng, { icon: divIcon }).addTo(map).bindPopup(popupContent).openPopup();
                        markersLayer.addLayer(marker);
                        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
                        map.setView(latlng, zoom - 1); // access the zoom
                    }
                });

                // 格式化弹窗内容
                function getPopupContent(feature, index) {
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
                    let scoreA = properties['风险规避']
                    let scoreB = properties['医疗资源']
                    let scoreC = properties['服务治理']
                    let scoreD = properties['居民特征']
                    let totalScore = properties['总分']
                    let rankA = properties['r风险规避']
                    let rankB = properties['r医疗资源']
                    let rankC = properties['r服务治理']
                    let rankD = properties['r居民特征']
                    let totalScoreRank = properties['r总分']

                    let rankAName = getRankName(properties['r风险规避'])
                    let rankBName = getRankName(properties['r医疗资源'])
                    let rankCName = getRankName(properties['r服务治理'])
                    let rankDName = getRankName(properties['r居民特征'])
                    let totalScoreRankName = getRankName(properties['r总分'])

                    let foreBreak = properties['预测分段']
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
                    if (tipD1) {
                        tips += "," + tipD1
                    }
                    if (tipD2) {
                        tips += "," + tipD2
                    }
                    tips = tips.substring(1);
                    let popupContent = "";
                    if (properties && properties['社区名称']) {
                        popupContent += "<p style='font-weight:bold'>" + properties['社区名称'] + "</p>"
                        popupContent += "<p class='replace'>抵抗力评分:分数占位符</p>";
                        popupContent += "<p class='replace2'>抵抗力排名:排名占位符</p>";
                        popupContent += `<button id='detailBtn' class='detailBtn' data-fore=${foreBreak} data-ranka=${rankAName}  data-rankb=${rankBName} data-rankc=${rankCName} data-rankd=${rankDName} data-rank=${totalScoreRankName} data-rankaS=${rankA}  data-rankbS=${rankB} data-rankcS=${rankC} data-rankdS=${rankD} data-rankS=${totalScoreRank} data-scorea=${scoreA}  data-scoreb=${scoreB} data-scorec=${scoreC} data-scored=${scoreD} data-tips='${tips}'  data-name=${properties['社区名称']}  data-score=${totalScore} data-totalscorerank=${totalScoreRank}>详细情况> </button>`
                    }

                    return popupContent
                }
                //创建图例
                var legend = L.control({ position: 'bottomright' });
                legend.onAdd = function (map) {
                    //创建图例div
                    var div = L.DomUtil.create('div', 'info legend'),
                        grades,
                        grades_name,
                        labels = [],
                        from, label;
                    // if(curObj.state.index<5){
                    grades = [0, 1000, 2000, 3000, 4000, 5000, 6000, 6727]
                    grades_name = ['', '非常高', '很高', '较高', '一般', '较低', '很低', '非常低']
                    for (let i = 0; i < grades.length - 1; i++) {
                        from = grades[i];
                        label = grades_name[i + 1];
                        labels.push(
                            '<div><i style="background:' + curObj.getColor(from + 1) + '"></i> ' +
                            label + "</div>");// (to>=0 ? '&ndash;' + from : '+'));
                    }

                    let labelStr = labels.join('<div style="margin-bottom:2px;font-size:100"></div>')
                    div.innerHTML = '<h4 class="layerTitle">抵抗力排名</h4><div class="labels">' + labelStr + '</div>';
                    div.innerHTML += '<div class="markerIcon"><img src="/static/media/yiqingpoi2.9f40b254.png"/>  已现疫情小区</div>'

                    self.setState({
                        labelStr: labelStr
                    })
                    return div;
                };
                //添加图例
                legend.addTo(map);

                function getRankName(d) {
                    return d > 6000 ? '非常低' :
                        d > 5000 ? '很低' :
                            d > 4000 ? '较低' :
                                d > 3000 ? '一般' :
                                    d > 2000 ? '较高' :
                                        d > 1000 ? '很高' :
                                            '非常高';
                }

                //图层样式
                function style(feature) {
                    return {
                        weight: 0,
                        opacity: 1,
                        color: 'white',
                        dashArray: '0',
                        fillOpacity: 0.7,
                        fillColor: curObj.getColor(feature.properties['r总分'])
                    };
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
                    var zoom = map.getBoundsZoom(e.target.getBounds());
                    map.setView(e.latlng, zoom - 1);
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
                    const names = ['抵抗力总分', "风险规避总分", "医疗资源总分", "服务治理总分", "居民特征总分"];
                    const ranks = ['抵抗力总分排名', '风险规避排名', '医疗资源排名', '服务治理排名', '居民特征排名', '预测分段']
                    const mapKeys = ["", "a", "b", "c", "d"];
                    const htmlStr = map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]].getContent();
                    let div = document.createElement("div");
                    div.innerHTML = htmlStr;
                    const p = div.querySelector(".replace");
                    const p2 = div.querySelector(".replace2");
                    const btn = div.querySelector("button");
                    if (p) {
                        let activeIndex = self.state.index ? self.state.index : self.props.activeIndex
                        if (activeIndex < 5) {
                            p.innerText = names[self.props.activeIndex] + ": " + parseFloat(btn.getAttribute(`data-score${mapKeys[self.props.activeIndex]}`)).toFixed(0)
                            p2.innerText = ranks[self.props.activeIndex] + ": " + btn.getAttribute(`data-rank${mapKeys[self.props.activeIndex]}`)
                        } else {
                            p.innerText = ranks[5] + ": " + btn.getAttribute(`data-fore`)
                            p2.innerText = ''
                        }
                        map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]].setContent(div.innerHTML);
                        document.querySelectorAll(".detailBtn").forEach(item => {
                            item.onclick = function (e) {
                                const btn = e.target;
                                self.setState({
                                    modalRadar: true,
                                    radarTips: btn.getAttribute("data-tips"),
                                    radarScore: btn.getAttribute("data-score"),
                                    radarTitle: btn.getAttribute("data-name"),
                                    radarTotalscorerank: parseInt(btn.getAttribute("data-totalscorerank")),
                                    radarData: [btn.getAttribute("data-scorea"), btn.getAttribute("data-scoreb"), btn.getAttribute("data-scorec"), btn.getAttribute("data-scored")],
                                    rankA: btn.getAttribute("data-rankaS"),
                                    rankB: btn.getAttribute("data-rankbS"),
                                    rankC: btn.getAttribute("data-rankcS"),
                                    rankD: btn.getAttribute("data-rankdS"),
                                    foreBreak: btn.getAttribute("data-fore"),
                                })
                            }
                        })
                        console.log(self.state.radarTotalscorerank)
                    }

                });
                map.on('zoom', function (e) {
                    console.log(e)
                    // let markers = yqLayer.getLayers()
                    if (e.target.getZoom() >= 16) {
                        yqLayer.eachLayer((marker) => {
                            marker.openTooltip()
                        })
                        hospitalLayer.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        yqLayer.eachLayer((marker) => {
                            marker.closeTooltip()
                        })
                        hospitalLayer.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                });

                map.addControl(searchControl);  //inizialize search control
                self.setState({
                    rendererLayer: featuresLayer,
                    markersLayer: markersLayer,
                    searchControl: searchControl,
                    hospitalLayer: hospitalLayer
                })
            })


            this.setState({
                instance: map,
            })

        })
    }
    searchDistrict(value) {
        this.state.searchControl.searchText(value)
        console.log(`输入框提交的内容:${value}`)
    }
    // 根据属性范围设置渲染颜色
    getColor(d) {
        if (typeof d === 'number') {
            return d > 6000 ? '#FF0000' :
                d > 5000 ? '#FF5500' :
                    d > 4000 ? '#FFAA00' :
                        d > 3000 ? '#FFFF00' :
                            d > 2000 ? '#B0E000' :
                                d > 1000 ? '#6FC400' :
                                    '#38A800';
        } else {
            // 红色色系
            return d === '高' ? '#800026' :
                d === '较高' ? '#FF0000' :
                    d === '一般' ? '#FFAA00' :
                        d === '较低' ? '#B0E000' :
                            '#38A800'
        }
        // 红色色系
        // return d > 5887 ? '#800026' :
        //       d > 5046 ? '#BD0026' :
        //         d > 4205 ? '#E31A1C' :
        //         d > 3364 ? '#FC4E2A' :
        //             d > 2523 ? '#FD8D3C' :
        //                  d > 1682 ? '#FEB24C' :
        //                  d > 841 ? '#FED976' :
        //                 '#FFEDA0';
        //绿色色系
        // return d > 70 ? '#024822':
        //     d > 50 ? '#027C3E':
        //     d > 30 ? '#03CA60':
        //     d > 10 ? '#11FF84':
        //             '#99FFCB'
    }
    // 切换不同指标地图
    switchIndexMap(index) {
        let renderField = this.state.rankFieldList[index] //fieldlist[index]
        let self = this
        let featuresLayer = this.state.rendererLayer
        let hosLegendDiv = `<div id="hos" class="markerIcon"><img src=${hospitalIcon}  />  发热门诊医院</div>`
        if (featuresLayer) {
            this.state.instance.closePopup()
            let legendDiv = document.getElementsByClassName('info legend leaflet-control')[0]
            let title = document.querySelector(".layerTitle");
            let labelsDiv = document.querySelector(".labels")
            legendDiv.innerHTML = legendDiv.innerHTML.replace(title.innerHTML, this.state.titleList[index])
            featuresLayer.setStyle(function (feature) {
                return {
                    weight: 0,
                    opacity: 0,
                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 0.6,
                    fillColor: self.getColor(feature.properties[renderField])
                };
            })
            if (index === 2) {

                this.state.instance.addLayer(this.state.hospitalLayer)
                legendDiv.innerHTML = legendDiv.innerHTML.replace(labelsDiv.innerHTML, this.state.labelStr)
                if (legendDiv.innerHTML.indexOf('发热门诊医院') === -1) {
                    legendDiv.innerHTML += hosLegendDiv
                }
            } else {
                if (index === 5) {
                    let breaks = ['高', '较高', '一般', '较低', '低']
                    let labels = []
                    for (let i = 0; i < breaks.length; i++) {
                        let label = breaks[i];
                        labels.push('<div><i style="background:' + self.getColor(label) + '"></i> ' + label + "</div>");
                    }
                    let labelStr = labels.join('<div style="margin-bottom:2px;font-size:100"></div>')
                    // labelsDiv.innerHTML = labelStr
                    legendDiv.innerHTML = legendDiv.innerHTML.replace(labelsDiv.innerHTML, labelStr)
                } else {
                    legendDiv.innerHTML = legendDiv.innerHTML.replace(labelsDiv.innerHTML, this.state.labelStr)
                }
                this.state.instance.removeLayer(this.state.hospitalLayer)
                var e = document.getElementById('hos');
                if (e) {
                    legendDiv.removeChild(e);
                    console.log(legendDiv.innerHTML)
                }
            }
        }
        this.setState({
            index: index,
        })
    }
    render() {
        const rankDetail = ["排名高的小区对疫情的抵抗力相对较强", "排名高的小区疫情传播风险相对较小", "排名高的小区周边医疗资源相对较好", "排名高的小区治理服务相对较好", "排名高的小区居民特征对抗击疫情较为有利"];
        return (
            <MapWrap >
                {/* <MapUtilsWrap >
                    <MapUtil onClick={() => { this.changeMapContainer() }}> <i className="iconfont">&#xe666;</i> </MapUtil>
                    <MapUtil onClick={() => { this.changeZoom("add") }}> <i className="iconfont">&#xe627;</i> </MapUtil>
                    <MapUtil onClick={() => { this.changeZoom("reduce") }}><i className="iconfont">&#xe660;</i> </MapUtil>
                    <MapUtil onClick={() => { this.changeRankDialog('Bar', true) }}><i style={{ fontSize: "25px" }} className="iconfont">&#xe7da;</i> </MapUtil>
                </MapUtilsWrap> */}
                <MapContainer ref={this.state.map} id={this.state.id} diffHeight={this.state.diffHeight}></MapContainer>
                <Amap plugins={['ToolBar']} events={this.amapEvents} amapkey='4da1355b7376039312f14745617f02f9' center={this.state.center}></Amap>
                <Tip><a href="mailto:ict@thupdi.com" style={{ color: "rgb(54, 54, 54)" }}>ict@thupdi.com </a></Tip>
                <Modal
                    visible={this.state.modalBar}
                    closable={true}
                    transparent={true}
                    title={this.getBarName()}
                    onClose={() => { this.changeRankDialog('Bar', false) }}
                    style={{ width: "95%" }}
                >
                    <div style={{ textAlign: "center", color: "#aaa", fontSize: "12px" }}>{this.props.activeIndex === -1 ? "排名高的小区疫情发生概率较高" : rankDetail[this.props.activeIndex]}</div>
                    {/* <BarChart rankData={this.state.rankData} title={this.state.rankTitle}></BarChart> */}
                    <MTable body={this.state.rankData} head={this.props.activeIndex === -1 ? this.state.head1 : this.state.head} title={this.state.rankTitle} align="center"></MTable>
                </Modal>
                <Modal
                    visible={this.state.modalRadar}
                    closable={true}
                    transparent={true}
                    title={this.state.radarTitle}
                    onClose={() => { this.changeRankDialog('Radar', false) }}
                    style={{ width: "95%" }}
                >
                    {/* <span style={{ color: "rgb(0,174,102)" }}>抵抗力总分:{parseFloat(this.state.radarScore).toFixed(2)}</span><br /> */}
                    <span style={{ color: "rgb(0,174,102)" }}>抵抗力总分:{parseInt(this.state.radarScore)}</span><br />
                    <span style={{ color: "rgb(0,174,102)" }}>得分超过{parseInt(((6727 - this.state.radarTotalscorerank) / 6727) * 100)}%的小区</span>

                    <RadarChart radarData={this.state.radarData} rank={{ rankA: this.state.rankA, rankB: this.state.rankB, rankC: this.state.rankC, rankD: this.state.rankD }}></RadarChart>
                    {this.state.radarTips.split(",").length > 0 ? (this.state.radarTips.split(",")[0].length > 0) ? (<p style={{ color: "rgb(170, 170, 170)", fontSize: "12px", textAlign: "left" }}>重点防范</p>) : "" : ""}
                    {this.state.radarTips.split(",").map((item, index) => {
                        return (
                            <div key={index} style={{ color: "rgb(54,54,54)", textAlign: "left", fontSize: "12px" }} >·{item}</div>
                        )
                    })}
                </Modal>
            </MapWrap >
        )
    }
}

export default Map