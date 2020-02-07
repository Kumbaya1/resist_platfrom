import React from "react"

class MTable extends React.Component {
    render() {
        const align = this.props.align || "left";
        return (
            <table style={{ width: '100%' }}>
                <thead>
                    <tr style={{ textAlign: align }}>
                        {this.props.head.map(item => {
                            return (
                                <td key={item.prop}>{item.label}</td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.body.map((item, index) => {
                        return (
                            <tr key={index} style={{ textAlign: align }}>
                                {this.props.head.map(el => {
                                    return (<td key={el.prop}>
                                        {item[el.prop]}
                                    </td>)
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
export default MTable