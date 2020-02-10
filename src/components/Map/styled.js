import styled from 'styled-components'
const MapWrap = styled.div`
    position:relative;
`
const MapContainer = styled.div.attrs(
    (props) => {
        return {
            id: props.id
        }
    }
)`
    overflow:hidden;
    height:${props => ("calc(100vh - " + props.diffHeight + "px)")}
    `
// height:${props => props.height}px;

const MapUtilsWrap = styled.div`
    position: absolute;
    top: 41px;
    right: 10px;
    z-index: 1001;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border-top:1px solid #ccc;
`
const MapUtil = styled.div`
    width: 30px;
    height: 30px;
    background: #fff;
    line-height: 30px;
    text-align: center;
    border-bottom: 1px solid #ccc;
`
const Tip = styled.div`
    position:absolute;
    bottom:0px;
    right:2px;
    z-index:1000;
    font-size:12px;
`
export {
    MapWrap,
    MapContainer,
    MapUtilsWrap,
    MapUtil,
    Tip
}