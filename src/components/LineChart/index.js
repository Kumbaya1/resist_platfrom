import React from 'react';
import echarts from 'echarts';
import { Chart } from "./styled"

class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lineChart: React.createRef(),
            option: {
                // title: {
                //     text: '小区按xxx得分排名TOP20   ',
                //     subtext: '注：排名得分越高，小区风险相对越低'
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['小区1', '小区2', '小区3', '小区4', '小区5', '小区6']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [60, 75, 77, 80, 96, 100]
                    },
                ]
            }
        }
    }
    UNSAFE_componentWillMount() {


    }
    componentDidMount() {
        let instance = echarts.init(this.state.lineChart.current);
        instance.setOption(this.state.option)
    }
    render() {
        return (<Chart ref={this.state.radar}></Chart>)
    }
}

export default LineChart