import echarts from 'echarts'
const main = document.getElementById('main')
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main,'default');

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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
        data: [1, 2, 3, 4, 5, 6, 7],
        type: 'line'
    }]
});