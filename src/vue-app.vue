<template>
  <div>
    <h1>
      如何在 Vue 里使用 Echarts
    </h1>
    <vue-echarts :option = "option" :loading="loading"></vue-echarts>
    <button @click="loadMore">加载更多</button>
  </div>
</template>

<script>
import VueEcharts from './vue-echarts.vue'
export default {
  data(){
    return{
      loading: false,
      option: {
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
      }
    }
  },
  components: {VueEcharts},
  methods: {
    loadMore(){
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.option = {
          xAxis: {
            data: ['2021-8-1','2021-8-2','2021-8-3']
          },
          series: [{
            data: [1,2,3]
          }]
        }
      }, 3000)
    }
  }
}
</script>