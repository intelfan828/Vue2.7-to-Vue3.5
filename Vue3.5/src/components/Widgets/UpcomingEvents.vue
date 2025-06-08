<template>
  <div>
    <app-section-loader :status="loader"></app-section-loader>
    <PerfectScrollbar style="height: 310px" :settings="settings">
      <v-list class="card-list top-selling">
        <v-list-item ripple v-for="(events, index) in upcomingEvents" :key="index">
          <template class="py-1">
            <v-list-item-subtitle>
              <h5 class="mb-2">{{ events.title }}</h5>
              <p class="mb-0 fs-12 grey--text">{{ events.dateAndCity }}</p>
            </v-list-item-subtitle>
          </template>
          <v-badge class="info text-capitalize">{{ events.label }}</v-badge>
        </v-list-item>
      </v-list>
    </PerfectScrollbar>
  </div>
</template>
<script>
import api from '@/api'
export default {
  data() {
    return {
      loader: false,
      upcomingEvents: [
        {
          title: 'Marketing Seminar',
          dateAndCity: '28th April, Mumbai',
          label: 'Email',
        },
        {
          title: 'Strategy Planning',
          dateAndCity: '22th May, Delhi',
          label: 'Phone',
        },
        {
          title: 'Hiring Personals',
          dateAndCity: '29th May, Delhi',
          label: 'Skype',
        },
        {
          title: 'Training',
          dateAndCity: '30th May, Delhi',
          label: 'Email',
        },
      ],
      settings: {
        maxScrollbarLength: 60,
      },
    }
  },
}
</script>
