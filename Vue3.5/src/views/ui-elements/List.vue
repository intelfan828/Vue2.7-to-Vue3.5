<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl fluid pt-0>
      <app-card :heading="$t('message.list')">
        <v-layout row wrap>
          <v-col xs12 md6>
            <v-card class="elevation-5">
              <v-toolbar color="primary" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>list 1</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-btn icon>
                  <v-icon icon="mdi-magnify" />
                </v-btn>
              </v-toolbar>
              <v-list two-line>
                <v-subheader>Today</v-subheader>
                <template v-for="item in list1" v-bind:key="item.title">
                  <v-list-item @click="">
                    <v-avatar>
                      <img v-bind:src="item.avatar" />
                    </v-avatar>
                    <template>
                      <v-list-item-title v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </template>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
          <v-col xs12 md6>
            <v-card class="elevation-5">
              <v-toolbar color="warning" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>list 2</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-btn icon>
                  <v-icon icon="mdi-magnify" />
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-list>
                <v-list-item v-for="item in list2" v-bind:key="item.title" @click="">
                  <v-list-item-action>
                    <v-icon v-if="item.icon" color="orange" icon="md:star" />
                  </v-list-item-action>
                  <template>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </template>
                  <v-avatar>
                    <img v-bind:src="item.avatar" />
                  </v-avatar>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-layout>
      </app-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          avatar: '/static/avatars/user-6.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='grey--text'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: '/static/avatars/user-7.jpg',
          title: 'Summer BBQ <span class="primary--text">4</span>',
          subtitle:
            "<span class='grey--text'>To Alex, Scott, Jennifer</span>  &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: '/static/avatars/user-10.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='grey--text'>Sandra Adams</span>  &mdash; Do you have Paris recommendations? Have you ever been?",
        },
      ],
      list2: [
        {
          icon: true,
          title: 'Jason Oner',
          avatar: '/static/avatars/user-11.jpg',
        },
        {
          icon: true,
          title: 'Smith Oner',
          avatar: '/static/avatars/user-7.jpg',
        },
        { title: 'Travis Howard', avatar: '/static/avatars/user-12.jpg' },
        { title: 'Ali Connors', avatar: '/static/avatars/user-9.jpg' },
        { title: 'Cindy Baker', avatar: '/static/avatars/user-8.jpg' },
      ],
    }
  },
}
</script>
