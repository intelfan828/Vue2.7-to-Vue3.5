<template>
  <v-list-item class="sidebar-profile">
    <v-avatar>
      <img
        src="/static/img/Logo-(Option-3).png"
        alt="avatar"
        height="40"
        width="40"
        class="img-responsive"
      />
    </v-avatar>
    <span class="ml-3">{{ admin.name }}</span>
    
    <v-menu
      location="bottom"
      offset="0,10"
      content-class="userblock-dropdown"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon dark v-bind="props" class="ma-0 ml-16 myUnSetShadow myUnSetBackground">
          <v-icon icon="md:more_vert" />
        </v-btn>
      </template>

      <div class="dropdown-content">
        <div class="dropdown-top white--text bg-primary">
          <span class="white--text fs-14 fw-bold d-block">{{ admin.name }}</span>
          <span class="d-block fs-12 fw-normal">{{ admin.email }}</span>
        </div>
        <v-list class="dropdown-list">
          <template v-for="userLink in userLinks" :key="userLink.id">
            <v-list-item
              v-if="userLink.id !== 4"
              :to="getMenuLink(userLink.path)"
            >
              <template v-slot:prepend>
                <i :class="userLink.icon"></i>
              </template>
              <v-list-item-title>
                <span>{{ $t(userLink.title) }}</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-else @click="logoutUser">
              <template v-slot:prepend>
                <i :class="userLink.icon"></i>
              </template>
              <v-list-item-title>
                <span>{{ $t(userLink.title) }}</span>
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-menu>
  </v-list-item>
</template>

<script>
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  computed: {
    admin() {
      return this.$store.getters.currentAdmin
    },
  },

  data() {
    return {
      userLinks: [
        {
          id: 1,
          title: 'message.adminProfile',
          icon: 'ti-user mr-3 primary--text',
          path: '/admins/profile',
        },
        // {
        //   id: 2,
        //   title: 'message.inbox',
        //   icon: 'ti-email mr-3 success--text',
        //   path: '/inbox'
        // },
        // {
        //   id: 3,
        //   title: 'message.usersList',
        //   icon: 'ti-bell mr-3 info--text',
        //   path: '/users/users-list'
        // },
        {
          id: 4,
          title: 'message.logOut',
          icon: 'ti-power-off mr-3 error--text',
        },
      ],
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('signOut', this.$router)
    },

    getMenuLink(path) {
      return '/' + getCurrentAppLayout(this.$router) + path
    },
  },
}
</script>
