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
    font-size:20px;
    text-align:center;
    height:35px;
    line-height:35px;
    color:rgb(0,174,102);
    font-weight:300;
`
const SectionText = styled.p`
    color:rgb(54,54,54);
    line-height:28px;
    letter-space:0.01em;
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
export {
    Title,
    SectionTitle,
    SectionText,
    SectionSubTitle,
    Wish
}