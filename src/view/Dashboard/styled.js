import styled from "styled-components"

const Wrap = styled.div`
    height:100%;
`
const Title = styled.h1`
    font-size:20px;
    text-align:center;
    height:35px;
    line-height:35px;
    font-weight:bold;
    color:rgb(0,174,102);
`
const Text = styled.p`
    font-size:12px;
    line-height:20px;
    color:rgb(54,54,54);
    text-align:center;
`
const AboutLink = styled.span`
    text-align:center;
    text-decoration:underline;
    height:30px;
    line-height:30px;
    color:rgb(0,174,102);
`
const PlateWrap = styled.div`
    display:flex;
    justify-content:space-between;
`
const Plate = styled.div`
    text-align:center;
    flex:1

`
const AboutMap = styled.div`
    left: 10px;
    bottom: 20px;
    position: fixed;
    background-color: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 999;
    line-height:15px;
`
const TopRank = styled.div`
    left: 10px;
    bottom: 80px;
    position: fixed;
    background-color: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: rgb(0, 174, 102);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 999;
    line-height:15px;
`
const Join = styled.div`
    left: 10px;
    bottom: 140px;
    position: fixed;
    background-color: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: rgb(0, 174, 102);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 999;
    line-height:15px;
`

const Forecast = styled.div`
    left: 10px;
    bottom: 200px;
    position: fixed;
    background-color: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: rgb(0, 174, 102);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 999;
    line-height:15px;
`

const Locate = styled.div`
    left: 10px;
    bottom: 260px;
    position: fixed;
    background-color: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: rgb(0, 174, 102);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 999;
    line-height:15px;
`


export {
    Wrap,
    Title,
    Text,
    AboutLink,
    PlateWrap,
    Plate,
    AboutMap,
    TopRank,
    Join,
    Forecast,
    Locate
}