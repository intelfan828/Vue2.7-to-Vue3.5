<template>
  <div class="banner-image-wrap banner-detail grey darken-4 ma-0">
    <v-container grid-list-xl fluid>
      <div class="banner-content-wrap">
        <v-layout row wrap align-center justify-center fill-height>
          <v-col xs12 sm12 md12 lg12 xl12>
            <v-layout row wrap align-center justify-center filll-height>
              <v-col xs12 sm12 md7 lg7 xl8>
                <h2 class="white--text">{{ CourseData.courseDetail.heading }}</h2>
                <h4 class="white--text">{{ CourseData.courseDetail.content }}</h4>
                <div class="meta-info">
                  <p class="white--text">
                    <span class="bestseller-tag d-inline-block mr-4 mb-1">{{
                      $t('message.bestseller')
                    }}</span>
                    <span class="rating-wrap d-inline-block"></span>
                    <span class="student-count d-inline-block"
                      ><span class="count font-weight-bold">{{
                        CourseData.courseDetail.bestSeller
                      }}</span>
                      students enrolled</span
                    >
                  </p>
                  <p class="white--text">
                    <span class="white--text">Created By </span>
                    <span class="instructor-name d-inline-block"
                      ><a href="#" class="white--text">
                        {{ CourseData.courseDetail.createdBy }}
                      </a></span
                    >
                    <span class="updated-time d-inline-block">
                      Last Updated {{ CourseData.courseDetail.lastUpdates }}</span
                    >
                  </p>
                  <p class="white--text">
                    <span class="language layout align-start ma-0"
                      ><v-icon class="cmr-8" icon="md:chat_bubble_outline" />{{
                        CourseData.courseDetail.language
                      }}</span
                    >
                  </p>
                </div>
              </v-col>
              <v-col xs12 sm6 md5 lg4 xl3>
                <app-card contentCustomClass="pa-4">
                  <div class="video-wrap overlay-wrap d-inline-flex">
                    <img
                      class="banner-video w-100"
                      src="/static/img/about2.png"
                      width="230"
                      height="235"
                      alt="video"
                    />
                    <div class="overlay-content layout align-center justify-center">
                      <v-dialog v-model="dialog" width="500" height="300">
                        <template v-slot:activator="{ on }">
                          <v-btn @click="on" icon>
                            <v-icon icon="md:play_circle_filled" />
                          </v-btn>
                        </template>
                        <iframe
                          :src="CourseData.courseDetail.demoVideoUrl"
                          frameborder="0"
                          allowfullscreen
                        ></iframe>
                      </v-dialog>
                    </div>
                  </div>
                </app-card>
              </v-col>
            </v-layout>
          </v-col>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import CourseData from '../data'
export default {
  data() {
    return {
      CourseData,
      dialog: false,
    }
  },
}
</script>
