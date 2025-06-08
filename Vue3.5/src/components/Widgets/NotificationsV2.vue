<template>
  <div class="notificationv2-widget-wrap">
    <v-tabs grow v-model="tab">
      <v-tab :value="1">{{ $t('message.recentNotifications') }}</v-tab>
      <v-tab :value="2">{{ $t('message.messages') }}</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <v-card flat>
          <app-section-loader :status="loader"></app-section-loader>
          <PerfectScrollbar style="height: 405px" :settings="settings">
            <v-list three-line v-if="notifications !== null && notificationsTypes !== null">
              <template v-for="notification in notifications" :key="notification.id">
                <v-list-item ripple @click="">
                  <v-avatar>
                    <img :src="notification.userAvatar" />
                  </v-avatar>
                  <template>
                    <span class="fs-12 mb-1 d-block fw-normal">
                      <span
                        class="mr-1"
                        :class="getNotificationType(notification.notificationId).color"
                      >
                        <i
                          class="mr-2"
                          :class="getNotificationType(notification.notificationId).icon"
                        ></i>
                        <span>{{ getNotificationType(notification.notificationId).name }}</span>
                      </span>
                      {{ notification.time }}
                    </span>
                    <h6 class="mb-1">{{ notification.userName }}</h6>
                    <p class="fs-12 grey--text mb-0 fw-normal">{{ notification.body }}</p>
                  </template>
                </v-list-item>
              </template>
            </v-list>
          </PerfectScrollbar>
        </v-card>
      </v-tabs-window-item>
      <v-tabs-window-item :value="2">
        <v-card flat>
          <app-section-loader :status="loader2"></app-section-loader>
          <PerfectScrollbar style="height: 400px" :settings="settings">
            <v-list v-if="messages !== null" class="message-widget">
              <template v-for="message in messages" :key="message.id">
                <v-list-item ripple @click="">
                  <v-avatar>
                    <img :src="message.userAvatar" />
                  </v-avatar>
                  <template>
                    <h6 class="mb-0">{{ message.userName }}</h6>
                    <p class="fs-12 grey--text mb-0 fw-normal">{{ message.body }}</p>
                  </template>
                  <span class="fs-12 text-right message-time fw-normal">{{ message.time }}</span>
                </v-list-item>
              </template>
            </v-list>
          </PerfectScrollbar>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      loader: true,
      loader2: true,
      notifications: null,
      notificationsTypes: null,
      messages: null,
      settings: {
        maxScrollbarLength: 210,
      },
    }
  },
  mounted() {
    this.getNotifcations()
    this.getNotifcationTypes()
    this.getMessages()
  },
  methods: {
    getNotifcations() {
      api
        .get('vuely/notifications.js')
        .then((response) => {
          this.loader = false
          this.notifications = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getNotifcationTypes() {
      api
        .get('vuely/notificationTypes.js')
        .then((response) => {
          this.loader = false
          this.notificationsTypes = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getMessages() {
      api
        .get('vuely/messages.js')
        .then((response) => {
          this.loader2 = false
          this.messages = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getNotificationType(notificationId) {
      for (const type of this.notificationsTypes) {
        if (type.id === notificationId) {
          return type
        }
      }
    },
  },
}
</script>

<script setup>
import { ref } from 'vue'

const tab = ref(1)
</script>
