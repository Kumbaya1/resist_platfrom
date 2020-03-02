import React from 'react';
import { Link } from "react-router-dom"
import { WhiteSpace, WingBlank } from 'antd-mobile';
import Map from "../../components/Map"
import { Wrap, PlateWrap, Plate, AboutMap, TopRank, Join, Forecast, Locate } from "./styled"
import "./style.css"
import chuachuanbofengxiannbo from "../../assets/images/chuanbofengxian.png"
import yiliaoziyuan from "../../assets/images/yiliaoziyuan.png"
import fuwuzhili from "../../assets/images/fuwuzhili.png"
import jumingoucheng from "../../assets/images/jumingoucheng.png"
import dikanglizongfen from "../../assets/images/dikanglizongfen.png"
import un_chuachuanbofengxiannbo from "../../assets/images/un_chuanbofengxian.png"
import un_yiliaoziyuan from "../../assets/images/un_yiliaoziyuan.png"
import un_fuwuzhili from "../../assets/images/un_fuwuzhili.png"
import un_jumingoucheng from "../../assets/images/un_jumingoucheng.png"
import un_dikanglizongfen from "../../assets/images/un_dikanglizongfen.png"
import location from '../../assets/images/location_green3.png'
// import { head, body } from "../../dataSource/topTen"
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            active: 0,
            mapFull: false,
            mapRef: React.createRef()
        }
    }
    handleClickPlate(item, index) {
        this.setState({
            active: index
        })
        this.state.mapRef.current.switchIndexMap(index)
    }
    onChange = (value) => {
        this.setState({
            value
        })
    }
    onSubmit(value) {
        this.state.mapRef.current.searchDistrict(value)
    }
    changeMapSize() {
        this.setState((prevState, props) => ({
            mapFull: !prevState.mapFull
        }))
    }
    handleClickForecast() {
        this.state.mapRef.current.forecastPlague()
        this.setState({
            active: -1
        })
    }
    render() {
        const Plates = [
            {
                name: "抵抗力总分",
                img: dikanglizongfen,
                unImg: un_dikanglizongfen
            },
            {
                name: "风险规避",
                img: chuachuanbofengxiannbo,
                unImg: un_chuachuanbofengxiannbo
            }, {
                name: "医疗资源",
                img: yiliaoziyuan,
                unImg: un_yiliaoziyuan
            },
            {
                name: "服务治理",
                img: fuwuzhili,
                unImg: un_fuwuzhili
            },
            {
                name: "居民特征",
                img: jumingoucheng,
                unImg: un_jumingoucheng
            },

        ];
        return (<Wrap>
            {/* <NavBar
                style={{ background: 'rgb(17, 19, 27)' }}
                rightContent={
                    <Icon key="0" type="ellipsis" />}
            ><Title>北京社区抵抗力</Title></NavBar> */}
            <WhiteSpace size="sm" />
            {/* <Title>北京社区疫情抵抗力地图</Title> */}
            {/* <p style={{ textAlign: 'center' }}><AboutLink><Link to="/about" style={{ color: 'rgb(0,174,102)' }}>关于地图</Link> </AboutLink></p> */}
            {/* <WingBlank size="lg">
                <SearchBar placeholder="搜索社区" value={this.state.value} onChange={this.onChange} className='s-input' onSubmit={(val) => { this.onSubmit(val) }}></SearchBar>
            </WingBlank> */}
            {/* <WhiteSpace /> */}
            <WingBlank size="lg">
                <PlateWrap >
                    {Plates.map((item, index) => {
                        return (
                            <Plate onClick={() => { this.handleClickPlate(item, index) }} key={index}>
                                {this.state.mapFull === false ? (<img style={{ margin: '2px auto 4px auto', display: "block", width: "50%" }} src={this.state.active === index ? item.img : item.unImg} alt={item.name} />) : ""}
                                <div style={{ fontSize: '12px', color: this.state.active === index ? 'rgb(0,174,102)' : 'rgb(54,54,54)' }}>{item.name}</div>
                            </Plate>
                        )
                    })}
                </PlateWrap>
            </WingBlank>
            <WhiteSpace size="sm" />
            <Locate onClick={() => this.state.mapRef.current.reLocate(true)}><img src={location} style={{ width: '25px', height: '25px' }} alt='' /></Locate>
            <Forecast onClick={() => { this.handleClickForecast() }} style={{ color: this.state.active === -1 ? "#F56C6C" : "rgb(0,174,102)" }}>安全度<br />&nbsp;&nbsp;预测</Forecast>
            <Join><a href='https://www.wjx.cn/jq/58194197.aspx' style={{ color: "rgb(0,174,102)" }}>我要<br />参与</a></Join>
            <AboutMap><Link to="/about" style={{ color: "rgb(0,174,102)" }}>了解<br />更多</Link></AboutMap>
            <TopRank onClick={() => { if (this.state.active !== -1) { this.state.mapRef.current.changeRankDialog('Bar', true) } }}>TOP<br />&nbsp;20</TopRank>
            <Map changeMapFull={() => { this.changeMapSize() }} activeIndex={this.state.active} ref={this.state.mapRef} rankTypeName={this.state.active !== -1 ? Plates[this.state.active].name : '疫情发生概率预测'} />
        </Wrap >)
    }
}

export default Dashboard