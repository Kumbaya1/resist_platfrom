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
    height:calc(100vh - 240px)
`
// height:${props => props.height}px;

const MapUtilsWrap = styled.div`
    position:absolute;
    top:40px;
    right:10px;
    z-index:1001;
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