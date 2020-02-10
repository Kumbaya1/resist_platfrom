import React from "react"
function Plate(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <img src={props.img} alt={props.name} style={{ width: "50px" }} />
            </div>
            <div style={{ color: "rgb(0,174,102)", fontWeight: "bold", fontSize: "16px", margin: "4px 0 6px" }}>{props.name}</div>
            <div style={{ color: "rgb(0,174,102)", fontSize: "14px" }}>{props.detail}</div>
        </div>
    )
}
export default Plate
