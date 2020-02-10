import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { WhiteSpace, WingBlank, SearchBar } from 'antd-mobile';
import Map from "../../components/Map"
import { Wrap, Text, AboutLink, PlateWrap, Plate } from "./styled"
import "./style.css"
import chuachuanbofengxiannbo from "../../assets/images/chuanbofengxian.png"
import yiliaoziyuan from "../../assets/images/yiliaoziyuan.png"
import fuwuzhili from "../../assets/images/fuwuzhili.png"
import jumingoucheng from "../../assets/images/jumingoucheng.png"
import dikanglizongfen from "../../assets/images/dikanglizongfen.png"
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
                name: "暴露情况",
                img: chuachuanbofengxiannbo
            }, {
                name: "医疗资源",
                img: yiliaoziyuan
            },
            {
                name: "服务治理",
                img: fuwuzhili
            },
            {
                name: "居民构成",
                img: jumingoucheng
            },
            {
                name: "抵抗力总分",
                img: dikanglizongfen
            }
        ];
        return (<Wrap>
            {/* <NavBar
                style={{ background: 'rgb(17, 19, 27)' }}
                rightContent={
                    <Icon key="0" type="ellipsis" />}
            ><Title>北京社区抵抗力</Title></NavBar> */}
            <WhiteSpace />
            {this.state.mapFull === false ? (<Fragment>
                <WingBlank size="lg"><Text> 共筑社区防线，查看北京6727个小区对疫情的抵抗力</Text></WingBlank>
                <p style={{ textAlign: 'center' }}><AboutLink><Link to="/about" style={{ color: 'rgb(0,174,102)' }}>关于地图</Link> </AboutLink></p></Fragment>) : ""}

            <WingBlank size="lg">
                <SearchBar placeholder="搜索社区" value={this.state.value} onChange={this.onChange} className='s-input' onSubmit={(val) => { this.onSubmit(val) }}></SearchBar>
            </WingBlank>
            <WhiteSpace />
            <WingBlank size="lg">
                <PlateWrap >
                    {Plates.map((item, index) => {
                        return (
                            <Plate onClick={() => { this.handleClickPlate(item, index) }} key={index}>
                                {this.state.mapFull === false ? (<img src={item.img} alt={item.name} />) : ""}
                                <div style={{ marginTop: '8px', fontSize: '12px', color: this.state.active === index ? 'rgb(0,174,102)' : 'rgb(54,54,54)' }}>{item.name}</div>
                            </Plate>
                        )
                    })}
                </PlateWrap>
            </WingBlank>
            <WhiteSpace />
            <Map changeMapFull={() => { this.changeMapSize() }} activeIndex={this.state.active} ref={this.state.mapRef} rankTypeName={Plates[this.state.active].name} />
        </Wrap >)
    }
}

export default Dashboard