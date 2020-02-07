import React from 'react';

import { Chart } from "./styled"
class RadarChart extends React.Component {
    constructor(props) {
        super(props)
        this.radar = React.createRef();
    }
    componentDidMount() {
        // console.log(this.radar.current)
    }
    render() {
        return (<Chart ref={this.radar}>我是雷达图</Chart>)
    }
}

export default RadarChart