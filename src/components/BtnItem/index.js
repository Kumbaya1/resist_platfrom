import React from "react"
function BtnItem(props) {
    const isSelect = props.selectName === props.name;
    return (
        <div style={{ textAlign: "center", display: "inline-block" }} onClick={() => { props.changeSelectName(props.name, props.item, props.index) }}>
            <div>
                <img src={isSelect ? props.img : props.unImg} alt={props.name} style={{ width: props.width ? props.width + "px" : "100%" }} />
            </div>
            <div style={{ color: isSelect ? "rgb(0,174,102)" : "#909399", fontSize: "12px" }}>{props.name}</div>
        </div>
    )
}
export default BtnItem
