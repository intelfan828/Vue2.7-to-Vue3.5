<!-- Subscribers Widget -->
<template>
  <div class="mb-10 pos-relative">
    <doughnut-chart-v2 :chartH="210" :config="subscribers"> </doughnut-chart-v2>
    <div class="overlay-content d-custom-flex justify-center align-items-center">
      <span class="grey--text count-value fw-semi-bold">
        <count-to :startVal="0" :endVal="15800" :duration="10000"></count-to>
      </span>
    </div>
  </div>
</template>

<script>
import DoughnutChartV2 from '../Charts/DoughnutChartV2'

// constants
import { ChartConfig } from '@/constants/chart-config'

//data
import { subscribers } from '@/views/dashboard/data'

export default {
  components: {
    DoughnutChartV2,
  },
  data() {
    return {
      ChartConfig,
      subscribers,
    }
  },
}
</script>
