import React from 'react';
import echarts from 'echarts';
import { Chart } from "./styled"

class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chart: React.createRef(),
            option: {
                legend: {
                    data: ['图一', '图二', '张三', '李四']
                },
                radar: [
                    {
                        indicator: [
                            { text: '传播风险', max: 100 },
                            { text: '医疗资源', max: 100 },
                            { text: '服务治理', max: 100 },
                            { text: '居民构成', max: 100 },

                        ],
                        center: ['50%', '50%'],
                        radius: 100,
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'circle',
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: 'black'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(0, 174, 102, 0.1)',
                                    'rgba(0, 174, 102, 0.2)', 'rgba(0, 174, 102, 0.3)',
                                    'rgba(0, 174, 102, 0.5)', 'rgba(0, 174, 102, 0.6)'],
                                shadowColor: 'rgba(0, 0, 0, 0)',
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }, splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 108)'
                            }
                        }
                    },
                ],
                series: [
                    {
                        name: '雷达图',
                        type: 'radar',
                        emphasis: {
                            lineStyle: {
                                width: 5
                            }
                        },
                        data: [
                            {
                                value: this.props.radarData,
                                areaStyle: {
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }
                            }
                        ]
                    },

                ]
            }
        }
    }
    componentDidMount() {
        let instance = echarts.init(this.state.chart.current);
        instance.setOption(this.state.option)
    }
    render() {
        return (<Chart ref={this.state.chart}></Chart>)
    }
}

export default LineChart