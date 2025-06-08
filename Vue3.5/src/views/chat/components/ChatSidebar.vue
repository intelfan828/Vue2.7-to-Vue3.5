<template>
  <v-card class="chat-content">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon icon="md:search" />
      </v-btn>
    </v-toolbar>
    <v-list>
      <PerfectScrollbar class="chat-sidebar-scroll" :style="getScrollHeight()" :settings="settings">
        <template v-for="(item, index) in users" :key="index">
          <v-list-item @click="openChat(item)" :class="{ 'grayish-blue': item.selected }">
            <v-avatar class="my-0 mr-4">
              <img :src="item.avatar" />
            </v-avatar>
            <template class="py-0">
              <h6 class="mb-1" v-html="item.name"></h6>
              <span
                class="fs-12 grey--text fw-normal"
                v-if="item.chats.length > 0"
                v-html="item.chats[item.chats.length - 1].body"
              ></span>
            </template>
          </v-list-item>
        </template>
      </PerfectScrollbar>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  computed: {
    ...mapGetters(['users', 'selectedUser']),
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 160,
      },
    }
  },
  methods: {
    openChat(user) {
      this.$store.dispatch('openChat', user)
    },
    getScrollHeight() {
      let layout = getCurrentAppLayout(this.$router)
      switch (layout) {
        case 'default':
          return 'height: calc(100vh - 130px)'
        case 'horizontal':
          return 'height: calc(100vh - 180px)'
        case 'boxed':
          return 'height: calc(100vh - 305px)'
        case 'boxed-v2':
          return 'height: calc(100vh - 305px)'
        default:
          return 'height: calc(100vh - 130px)'
      }
    },
  },
}
</script>
