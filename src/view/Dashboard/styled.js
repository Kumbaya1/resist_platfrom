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
    height:30px;
    font-size:16px;
    line-height:30px;
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

`
export {
    Wrap,
    Title,
    Text,
    AboutLink,
    PlateWrap,
    Plate
}