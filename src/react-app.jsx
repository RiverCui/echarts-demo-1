import React, {useState} from 'react'
import {ReactEcharts} from './react-echarts'

export function ReactApp(){
    const [option, setOption] = useState({
        title: {
            show: true,
            text: '吃苹果'
        },
        legend: {
            data: ['个数']
        },
        tooltip: {
            show: true
        },
        xAxis: {
            type: 'category',
            data: ['2021-8-1', '2021-8-2']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            lineStyle:{
                color: 'pink'
            },
            name: '个数',
            data: [1,2],
            type: 'line'
        }]
    })
    const [loading, setLoading] = useState(false)
    const onClick = () => {
        if(loading) {return}
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOption({
                xAxis: {
                    data: ['2021-8-1','2021-8-2','2021-8-3']
                },
                series: [{
                    data: [1,2,3]
                }]
            })
        },3000)
    }
    return (
        <div>
            <h1>在 React 里使用 Echarts</h1>
            <ReactEcharts option={option} loading={loading}/>
            <button onClick={onClick}>点击加载更多</button>
        </div>
    )
}