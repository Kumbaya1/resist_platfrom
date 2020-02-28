import React from 'react';
import echarts from 'echarts';
import { Chart } from "./styled"

class RadarChart extends React.Component {
    constructor(props) {
        super(props)
        console.log(window.innerWidth)
        const width = window.innerWidth || document.documentElement.offsetWidth;
        const w = 200;
        const p = Math.floor(((width - w) / width) * 100)
        console.log(w)
        console.log(p)
        this.state = {
            chart: React.createRef(),
            option: {
                radar: [
                    {
                        indicator: [
                            { text: '暴露情况\n' + parseFloat(this.props.radarData[0]).toFixed(0) + '\n>' + parseInt(((6727 - this.props.rank.rankA) / 6727) * 100) + '%的小区', max: 100 },
                            { text: '医疗资源\n' + parseFloat(this.props.radarData[1]).toFixed(0) + '\n>' + parseInt(((6727 - this.props.rank.rankB) / 6727) * 100) + '%的小区', max: 100 },
                            { text: '服务治理\n' + parseFloat(this.props.radarData[2]).toFixed(0) + '\n>' + parseInt(((6727 - this.props.rank.rankC) / 6727) * 100) + '%的小区', max: 100 },
                            { text: '居民构成\n' + parseFloat(this.props.radarData[3]).toFixed(0) + '\n>' + parseInt(((6727 - this.props.rank.rankD) / 6727) * 100) + '%的小区', max: 100 },

                        ],
                        center: ['50%', '50%'],
                        radius: `${p}%`,
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
                        // label: {
                        //     show: true,
                        //     formatter: (params) => {
                        //         let value = params.value;
                        //         let text = parseFloat(value).toFixed(2);
                        //         return text;
                        //     },
                        // },
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

export default RadarChart