<template>
  <Doughnut :data="data" :options="options" />
</template>

<script>
// Doughnut Chart Widget
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  props: ['config', 'chartH'],
  components: {
    Doughnut,
  },
  data() {
    const { labels, data, backgroundColor } = this.config
    return {
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 70,
        padding: 20,
      },
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderWidth: [0, 0, 0],
            hoverBackgroundColor: backgroundColor,
          },
        ],
      },
      height: this.chartH,
    }
  },
}
</script>
