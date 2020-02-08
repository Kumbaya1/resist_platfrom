import React from 'react';
import { Modal } from "antd-mobile"
import L from "leaflet"
import { MapContainer, MapWrap, MapUtilsWrap, MapUtil } from "./styled"
import {bjxq} from './bjxq'
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
            rankTitle: "小区排名条形图",
            radarTitle: "雷达图标题"
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
        // this.comHeight();
    }
    comHeight(cb) {
        const height = document.documentElement.offsetHeight;
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
    }
    componentDidMount() {
        this.comHeight(() => {
            const map = L.map('map').setView([40.054503749861944, 116.4022082099109], 14)
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
         

            // // jdx 示例
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
             //初始化图层，设置style，onEachFeature要素绑定
            let featuresLayer = L.geoJson(bjxq,{
              //  style: style,
                onEachFeature: onEachFeature
            }).addTo(map);
 
            let markersLayer = new L.featureGroup();
            map.addLayer(markersLayer);
            let searchControl = new L.Control.Search({
                layer: featuresLayer,
                propertyName: 'name',
                marker: false,
                filterData: function(keyWord,data){
                    if(keyWord&&keyWord.length>=2){
                        markersLayer.clearLayers();
                        var namelist = Object.keys(data)
                        var results = searchByRegExp(keyWord,namelist)
                        console.log(results)
                        if(results.length<3000){
                            for(var i=0;i <results.length;i++){
                                var loc = [data[results[i]].lat,data[results[i]].lng]
                                var marker = new L.Marker(new L.latLng(loc));//se property searched
                                markersLayer.addLayer(marker);
                            }
                        }
                    }
                },
                // moveToLocation: function(latlng, title, map) {
                //     //map.fitBounds( latlng.layer.getBounds() );
                //     var zoom = map.getBoundsZoom(latlng.layer.getBounds());
                //     map.setView(latlng, zoom); // access the zoom
                // }
            });
            searchControl.searchText(this.state.value)
            //  //图层样式
            // function style(feature) {
            //     return {
            //         weight: 1,
            //         opacity: 1,
            //         color: 'white',
            //         dashArray: '0',
            //         fillOpacity: 0.7,
            //         fillColor: getColor(feature.properties.OBJECTID)
            //     };
            // }
            // //根据要素属性设置特殊渲染样式
            function highlightFeature(e) {
                var layer = e.target;
                layer.setStyle({
                    weight: 2,
                    color: 'blue',
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
                map.fitBounds(e.target.getBounds());
            }
            //每个要素绑定事件
            function onEachFeature(feature, layer) {
                layer.on({
                    mouseover: highlightFeature,//鼠标移动上去高亮
                    mouseout: resetHighlight,//鼠标移出还原
                    click: zoomToFeature//单击要素缩放到要素范围
                });
                var popupContent = "<p>小区信息</p>";

                if (feature.properties && feature.properties.name) {
                //    popupContent += "<p>名称："+ feature.properties.name + "</p>" + "<p>地址："+ feature.properties.address+"</p>";
                }

                layer.bindPopup(popupContent);
            }
           
            //正则匹配
            //keyword是输入的值,list是存储数据的数组
            function searchByRegExp(keyWord, list) {
                if (!(list instanceof Array)) {
                    return;
                }
                var len = list.length;
                var arr = [];
                var reg = new RegExp(keyWord);
                for (var i = 0; i < len; i++) {
                    //如果字符串中不包含目标字符会返回-1
                    if (list[i].match(reg)) {
                        arr.push(list[i]);
                    }
                }
                return arr;
            }

            // searchControl.on('search:locationfound', function(e) {
            //     e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
            //     if(e.layer._popup)
            //         e.layer.openPopup();

            // }).on('search:collapsed', function(e) {

            //     featuresLayer.eachLayer(function(layer) {	//restore feature color
            //         featuresLayer.resetStyle(layer);
            //     });	
            // });
            
            map.addControl( searchControl );  //inizialize search control

            this.setState({
                instance: map
            })
            
        })
    }
    render() {
        return (
            <MapWrap >
                <MapUtilsWrap >
                    <MapUtil onClick={() => { this.changeMapContainer() }}> <i className="iconfont">&#xe666;</i> </MapUtil>
                    <MapUtil onClick={() => { this.changeZoom("add") }}> <i className="iconfont">&#xe627;</i> </MapUtil>
                    <MapUtil onClick={() => { this.changeZoom("reduce") }}><i className="iconfont">&#xe660;</i> </MapUtil>
                    <MapUtil onClick={() => { this.changeRankDialog('Bar', true) }}><i className="iconfont">&#xe7da;</i> </MapUtil>
                </MapUtilsWrap>
                <MapContainer ref={this.state.map} id={this.state.id} height={this.state.height}></MapContainer>
                <Modal
                    visible={this.state.modalBar}
                    closable={true}
                    transparent={true}
                    title={this.state.rankTitle}
                    onClose={() => { this.changeRankDialog('Bar', false) }}
                >
                    <div>
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                    </div>
                </Modal>
                <Modal
                    visible={this.state.modalRadar}
                    closable={true}
                    transparent={true}
                    title={this.state.radarTitle}
                    onClose={() => { this.changeRankDialog('Radar', false) }}
                >
                    <div>
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                    </div>
                </Modal>
            </MapWrap >
        )
    }
}

export default Map