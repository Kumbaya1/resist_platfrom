import React from 'react';
import { Modal } from "antd-mobile"
import L from "leaflet"
import { MapContainer, MapWrap, MapUtilsWrap, MapUtil } from "./styled"
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
            const url = "http://192.168.31.87:8085/geoserver/ncov/wms";
            const params = {
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                typeName: "BeijingCommunity",
                outputFormat: 'application/json',
                srsName: "EPSG:4326"
            }
            const paramsBeijing = {
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                typeName: "Beijing",
                outputFormat: 'application/json',
                srsName: "EPSG:4326"
            }
            const url_str = url + L.Util.getParamString(params, url);
            const url_str_beijing = url + L.Util.getParamString(paramsBeijing, url);
            fetch(url_str, {
                method: "GET",
            }).then(res => {
                return res.json()
            }).then(geojson => {
                let layer = L.geoJson(geojson, {
                    onEachFeature: (feature, layer) => {
                        const { name } = feature.properties;
                        layer.bindPopup(`<button onclick="alert('当前索引${this.props.activeIndex},0:传播风险，1:医疗资源，2:服务治理,3:居民构成,4:抵抗力总分')">${name}</button>`);
                    }
                })
                layer.addTo(map)
            })
            fetch(url_str_beijing, {
                method: "GET",
            }).then(res => {
                return res.json()
            }).then(geojson => {
                let layer = L.geoJson(geojson, {})
                layer.addTo(map)
            })
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