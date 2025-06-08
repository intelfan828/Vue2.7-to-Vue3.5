<template>
  <div>
    <app-section-loader :status="loader"></app-section-loader>
    <PerfectScrollbar style="height: 290px" :settings="settings">
      <v-list v-if="newMembers">
        <v-list-item class="listing" v-for="members in newMembers" avatar :key="members.id">
          <v-avatar>
            <img class="img-responsive" :src="members.photo_url" alt="user-image" />
          </v-avatar>
          <template>
            <span>{{ members.customer_name }}</span>
          </template>
          <v-list-item-action>
            <v-col>
              <v-btn fab dark small color="success" mr-2>
                <v-icon dark icon="md:ti-check" />
              </v-btn>
              <v-btn fab dark small color="error">
                <v-icon dark icon="md:ti-close" />
              </v-btn>
            </v-col>
          </v-list-item-action>
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
      newMembers: null,
      settings: {
        maxScrollbarLength: 100,
      },
    }
  },
  mounted() {
    this.getMembers()
  },
  methods: {
    getMembers() {
      this.loader = true
      const self = this
      api
        .get('newCustomers.js')
        .then((response) => {
          self.loader = false
          this.newMembers = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
