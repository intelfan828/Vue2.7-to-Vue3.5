<template>
  <div>
    <v-container fluid pt-0 grid-list-xl>
      <section-tooltip
        :title="$t('message.overview')"
        :tooltip="$t('message.dashboardOverview')"
      ></section-tooltip>

      <!-- Dash Cards -->
      <v-layout row wrap border-rad-sm overflow-hidden>
        <stats-card-v2
          colClasses="xl4 lg4 md4 sm6 xs12"
          :heading="$t('message.totalAds')"
          :amount="this.stats.ads.count.total"
        >
        </stats-card-v2>
        <stats-card-v2
          colClasses="xl4 lg4 md4 sm6 xs12"
          :heading="$t('message.freeAds')"
          :amount="this.stats.ads.count.free"
        >
        </stats-card-v2>
        <stats-card-v2
          colClasses="xl4 lg4 md4 sm6 xs12"
          :heading="$t('message.featuredAds')"
          :amount="this.stats.ads.count.featured"
        >
        </stats-card-v2>
        <stats-card-v2
          colClasses="xl4 lg4 md4 sm6 xs12"
          :heading="$t('message.lastMonth')"
          :amount="this.stats.ads.count.last_month"
        >
        </stats-card-v2>
        <stats-card-v2
          colClasses="xl4 lg4 md4 sm12 xs12"
          :heading="$t('message.users')"
          :amount="this.stats.users.total"
        >
        </stats-card-v2>
        <stats-card-v2
          colClasses="xl4 lg4 md4 sm12 xs12"
          :heading="$t('message.lastMonth') + $t('message.users')"
          :amount="this.stats.users.last_month"
        >
        </stats-card-v2>
      </v-layout>

      <!-- Percentages -->
      <v-layout row wrap>
        <!-- Category Ads -->
        <v-container>
          <app-card
            heading="📁 Most active categories"
            colClasses="lg6 md6 sm12 xs12"
            customClasses="mb-0"
            contentCustomClass="pt-0"
          >
            <category-sale></category-sale>
            <div class="footer-flex">
              <v-spacer></v-spacer>
              <span class="grey--text d-custom-flex align-items-center">
                <i class="zmdi zmdi-replay mr-2" @click="fetchStats"></i>
                <span class="fs-12 fw-normal">{{ $t('message.updated10MinAgo') }}</span>
              </span>
            </div>
          </app-card>
        </v-container>

        <!-- Location Ads -->
        <v-container>
          <app-card
            heading="📍 Most active cities"
            colClasses="lg6 md6 sm12 xs12"
            customClasses="mb-0"
            contentCustomClass="pt-0"
          >
            <location-ads></location-ads>
            <div class="footer-flex">
              <v-spacer></v-spacer>
              <span class="grey--text d-custom-flex align-items-center">
                <i class="zmdi zmdi-replay mr-2" @click="fetchStats"></i>
                <span class="fs-12 fw-normal">{{ $t('message.updated10MinAgo') }}</span>
              </span>
            </div>
          </app-card>
        </v-container>
      </v-layout>

      <v-layout row wrap>
        <!-- Top Selling -->
        <v-container xl4 lg4 md6 sm6 xs12>
          <top-selling></top-selling>
        </v-container>

        <!--    Most Active Users  -->
        <v-container xl4 lg4 md6 sm6 xs12>
          <most-active-users></most-active-users>
        </v-container>

        <!-- Devices Share -->
        <v-container xl4 lg4 md5 sm6 xs12>
          <app-card
            :heading="'📱 ' + $t('message.devicesShare')"
            customClasses="device-share-widget"
          >
            <device-share></device-share>
          </app-card>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// charts component
import LineChartShadow from '@/components/Charts/LineChartShadow'
import Sales from '@/components/Charts/SalesChartV2'
import LineChartWithArea from '@/components/Charts/LineChartWithArea'

// widgets
import RecentSale from '@/components/Widgets/RecentSales'
import SupportRequest from '@/components/Widgets/SupportRequestV2'
import ToDoList from '@/components/Widgets/ToDoList'
import Invoice from '@/components/Widgets/Invoice'
import RecentOrders from '@/components/Widgets/RecentOrders'
import WeeklySales from '@/components/Widgets/WeeklySales.vue'
import Reviews from '@/components/Widgets/Reviews'
import SocialFeeds from '@/components/Widgets/SocialFeeds'
import TopSelling from '@/components/Widgets/TopSelling'
import NewPost from '@/components/Widgets/AddNewBlog'
import BlogLayoutOne from '@/components/Widgets/BlogLayoutOne'
import BlogLayoutFour from '@/components/Widgets/BlogLayoutFour'
import CategorySale from '@/components/Widgets/CategorySales'
import DeviceShare from '@/components/Widgets/DeviceShare'

import { ChartConfig } from '@/constants/chart-config'
import MostActiveUsers from './widgets/MostActiveUsers'
import LocationAds from './widgets/LocationAds'

export default {
  components: {
    MostActiveUsers,
    LineChartShadow,
    RecentSale,
    SupportRequest,
    Sales,
    ToDoList,
    Invoice,
    RecentOrders,
    CategorySale,
    LineChartWithArea,
    WeeklySales,
    Reviews,
    SocialFeeds,
    TopSelling,
    NewPost,
    BlogLayoutOne,
    BlogLayoutFour,
    DeviceShare,
    LocationAds,
  },

  beforeCreate() {
    this.$store.dispatch('dashboard/fetchStats')
  },

  methods: {
    fetchStats() {
      this.$store.dispatch('dashboard/fetchStats')
    },
  },

  data() {
    return {
      ChartConfig,
    }
  },

  computed: {
    stats() {
      return this.$store.getters['dashboard/stats']
    },
  },
}
</script>
