import React from 'react';
import echarts from 'echarts';
import { Chart } from "./styled"

class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            barChart: React.createRef(),
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
                    left: '0',
                    right: '3%',
                    bottom: '3%',
                    top: "2%",
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: this.props.rankData.map(item => item.name),
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        type: 'bar',
                        data: this.props.rankData.map(item => item.score),
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgb(0,174,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(105,190,158)'
                            }]),
                        }
                    },
                ]
            }
        }
    }
    UNSAFE_componentWillMount() {


    }
    componentDidMount() {
        let instance = echarts.init(this.state.barChart.current);
        instance.setOption(this.state.option)
    }
    render() {
        return (<Chart ref={this.state.barChart}></Chart>)
    }
}

export default BarChart