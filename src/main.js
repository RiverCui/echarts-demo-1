import echarts from 'echarts'
const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main,'default');
let n = 1
let m = 1
function createKey(){
    n+=1
    return `2021-8-${n}`
}
function createValue(){
    m+=1
    return m
}
let xData = [createKey(),createKey(),createKey(),createKey(),createKey(),createKey()]
let values = [createValue(),createValue(),createValue(),createValue(),createValue(),createValue()]
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
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
        data: xData
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        lineStyle:{
            color: 'pink'
        },
        itemStyle: {
            borderWidth: 10
        },
        name: '个数',
        data: values,
        type: 'line'
    }]
});

loadMoreButton.addEventListener('click', ()=>{
    xData = [...xData, createKey()]
    values = [...values, createValue()]
    myChart.setOption({
        xAxis: {
            data: xData
        },
        series: [{
            data: values
        }]
    })
})