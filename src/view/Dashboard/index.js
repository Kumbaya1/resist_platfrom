import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { WhiteSpace, WingBlank } from 'antd-mobile';
import Map from "../../components/Map"
import { Wrap, Text, PlateWrap, Plate, AboutMap, Title, TopRank } from "./styled"
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
    render() {
        const Plates = [
            {
                name: "抵抗力总分",
                img: dikanglizongfen,
                unImg: un_dikanglizongfen
            },
            {
                name: "暴露情况",
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
                name: "居民构成",
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
            <Title>北京社区疫情抵抗力地图</Title>
            {this.state.mapFull === false ? (<Fragment>
                <WingBlank size="lg"><Text> 共筑社区防线，查看北京6727个小区对疫情的抵抗力</Text></WingBlank>
            </Fragment>) : ""}
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
            <AboutMap><Link to="/about" style={{ color: "rgb(0,174,102)" }}>了解<br />更多</Link></AboutMap>
            <TopRank onClick={() => { this.state.mapRef.current.changeRankDialog('Bar', true) }}>TOP<br />&nbsp;20</TopRank>
            <Map changeMapFull={() => { this.changeMapSize() }} activeIndex={this.state.active} ref={this.state.mapRef} rankTypeName={Plates[this.state.active].name} />
        </Wrap >)
    }
}

export default Dashboard