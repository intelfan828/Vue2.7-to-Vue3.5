<template>
  <div class="courses-wrap">
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl>
      <course-banner></course-banner>
      <v-layout row wrap align-center justify-center detail-course-list>
        <v-col sm12 xs12 md12 lg12 xl12>
          <v-layout row wrap align-start fill-height>
            <v-col sm12 xs12 md12 lg12 xl12>
              <div class="popularity tab-wrap">
                <v-tabs v-if="CourseData.courses" color="" slider-color="primary" v-model="active">
                  <v-tab :value="CourseData.courses.top" ripple>
                    {{ $t('message.top') }}
                  </v-tab>
                  <v-tab :value="CourseData.courses.new" ripple>
                    {{ $t('message.new') }}
                  </v-tab>
                  <v-tab :value="CourseData.courses.trending" ripple>
                    {{ $t('message.trending') }}
                  </v-tab>
                </v-tabs>
                <v-tabs-window v-model="active">
                  <v-tabs-window-item :value="CourseData.courses.top">
                    <course-card
                      :data="isTop"
                      :cols="6"
                      :colxl="3"
                      :collg="3"
                      :colmd="4"
                      :colsm="6"
                      :colxs="12"
                      :width="305"
                    ></course-card>
                  </v-tabs-window-item>
                  <v-tabs-window-item :value="CourseData.courses.new">
                    <course-card
                      :data="isNew"
                      :cols="6"
                      :colxl="3"
                      :collg="3"
                      :colmd="4"
                      :colsm="6"
                      :colxs="12"
                      :width="305"
                    ></course-card>
                  </v-tabs-window-item>
                  <v-tabs-window-item :value="CourseData.courses.trending">
                    <course-card
                      :data="isTrending"
                      :cols="6"
                      :colxl="3"
                      :collg="3"
                      :colmd="4"
                      :colsm="6"
                      :colxs="12"
                      :width="305"
                    ></course-card>
                  </v-tabs-window-item>
                </v-tabs-window>
              </div>
            </v-col>
            <v-col xs12 sm12 md10 lg10 xl12 instructor-card-wrap>
              <div>
                <h3>{{ $t('message.popularInstructors') }}</h3>
              </div>
              <instructor-card></instructor-card>
            </v-col>
          </v-layout>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CourseBanner from './CourseWidgets/CourseBanner'
import InstructorCard from './CourseWidgets/InstructorCard'
import CourseCard from './CourseWidgets/CourseCard'
import CourseData from './data'

export default {
  data() {
    return {
      CourseData,
    }
  },
  components: {
    CourseBanner,
    InstructorCard,
    CourseCard,
  },
  computed: {
    isTop() {
      return this.CourseData.courses.filter((item) => {
        return item.popular == 'top'
      })
    },
    isNew() {
      return this.CourseData.courses.filter((item) => {
        return item.popular == 'new'
      })
    },
    isTrending() {
      return this.CourseData.courses.filter((item) => {
        return item.popular == 'trending'
      })
    },
  },
}
</script>

<script setup>
import { ref } from 'vue'
import CourseData from './data'

const active = ref(CourseData.courses.top)
</script>
