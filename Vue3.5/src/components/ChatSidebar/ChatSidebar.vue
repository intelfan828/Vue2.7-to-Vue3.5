<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-toolbar-title class="text-center">{{ $t('message.chat') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon icon="md:search" />
      </v-btn>
    </v-toolbar>
    <v-tabs v-model="tab">
      <v-tab :value="1">{{ $t('message.recentChat') }}</v-tab>
      <v-tab :value="2">{{ $t('message.previousChats') }}</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <v-list>
          <v-list-item v-for="item in recentChat" v-bind:key="item.id" @click="">
            <v-avatar>
              <img v-bind:src="item.avatar" />
            </v-avatar>
            <v-list-item-title v-html="item.userName"></v-list-item-title>
            <v-list-item-action>
              <v-icon v-bind:color="item.active ? 'primary' : 'grey'" icon="md:chat_bubble" />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-tabs-window-item>
      <v-tabs-window-item :value="1">
        <v-list>
          <v-list-item v-for="item in previousChat" v-bind:key="item.id" @click="">
            <v-avatar>
              <img v-bind:src="item.avatar" />
            </v-avatar>
            <v-list-item-title v-html="item.userName"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script>
import { recentChat, previousChat } from './data'

export default {
  data() {
    return {
      recentChat,
      previousChat,
    }
  },
}
</script>

<script setup>
import { ref } from 'vue'

const tab = ref(1)
</script>
