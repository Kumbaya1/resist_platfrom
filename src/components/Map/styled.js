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
    height:${props => props.height}px;
    overflow:hidden;
`
const MapUtilsWrap = styled.div`
    position:absolute;
    top:10px;
    right:10px;
    z-index:999;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius:4px;
`
const MapUtil = styled.div`
    width:30px;
    height:30px;
    background:#fff;
    line-height:30px;
    text-align:center;
    border-bottom: 1px solid #ccc;
`
export {
    MapWrap,
    MapContainer,
    MapUtilsWrap,
    MapUtil
}