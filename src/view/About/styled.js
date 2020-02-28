import styled from "styled-components"

const Title = styled.h1`
    font-size:20px;
    text-align:center;
    height:35px;
    line-height:35px;
    font-weight:bold;
    color:rgb(0,174,102);
`
const SectionTitle = styled.h2`
    font-size:16px;
    text-align:center;
    height:35px;
    line-height:35px;
    color:rgb(0,174,102);
    font-weight:300;
`
const SectionTitleNum = styled.span`
    font-size:24px;
    font-weight: bold;
`
const SectionText = styled.p`
    color:rgb(54,54,54);
    line-height:28px;
    letter-space:0.01em;
    font-weight:700;
`
const SectionSubTitle = styled.h3`
    font-size:16px;
    text-align:center;
    height:35px;
    line-height:35px;
    color:rgb(0,174,102);
`
const Wish = styled.div`
    color:rgb(0,174,102);
    width:70%;
    margin:0 auto;
    line-height:25px;
    letter-space:0.01em;
    text-align:center;
`
const ReturnHome = styled.div`
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
    z-index: 5;
    line-height:15px;
`
const NewsText = styled.p`
    font-size:16px;
    font-style:italic;
    width:74%;
    margin:0 auto;
    letter-spacing: 0.1em;
    text-align: justify;
    color:#909399;
    line-height: 24px;
`
const GrayText = styled.p`
    color:#909399;
    line-height:28px;
    letter-space:0.01em;
`
const NorText = styled.p`
    line-height:28px;
    letter-space:0.01em;
    font-weight:300;
`
export {
    Title,
    SectionTitle,
    SectionText,
    SectionSubTitle,
    Wish,
    ReturnHome,
    SectionTitleNum,
    NewsText,
    GrayText,
    NorText,
}