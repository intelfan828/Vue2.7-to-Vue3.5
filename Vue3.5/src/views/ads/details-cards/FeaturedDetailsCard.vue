<template>
  <div>
    <v-list class="card-list top-selling management-wrap">
      <div class="sec-title mb-4">
        <h4>Featured Details</h4>
      </div>
      <v-list-item class="py-4">
        <template class="py-0">
          <v-list-item-title>Package :</v-list-item-title>
        </template>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.is_featured ? ad.featured.package : '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <template class="py-0">
          <v-list-item-title>Price :</v-list-item-title>
        </template>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.is_featured ? ad.featured.price : '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <template class="py-0">
          <v-list-item-title>Ends :</v-list-item-title>
        </template>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">
            {{
              ad.is_featured && ad.featured.end_date
                ? `${timeDifference.days} Days
                      : ${timeDifference.hours} Hours : ${timeDifference.minutes}
            minutes`
                : '-'
            }}
          </h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <template class="py-0">
          <v-list-item-title>End at :</v-list-item-title>
        </template>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.is_featured ? ad.featured.end_date : '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-card class="d-flex justify-center mb-6 mt-4" style="gap: 4px" flat tile>
        <v-btn
          v-if="!ad.is_featured"
          :disabled="loading || !$can(this.CREATE, this.RESOURCE)"
          @click="applyVoucher()"
          depressed
          color="success"
          class="mx-0"
        >
          {{ $t('Apply') }}
        </v-btn>
        <v-btn
          v-if="ad.is_featured"
          :disabled="loading || !$can(this.UPDATE, this.RESOURCE)"
          @click="applyVoucher()"
          depressed
          color="success"
          class="mx-0"
        >
          {{ $t('Update') }}
        </v-btn>
        <v-text-field dense outlined class="name-input" v-model="code" required></v-text-field>
        <v-btn
          :disabled="loading || !ad.is_featured || !$can(this.DELETE, this.RESOURCE)"
          @click="openDeleteConfirmation"
          depressed
          color="error"
          class="mx-0"
        >
          {{ $t('Cancel') }}
        </v-btn>
      </v-card>
      <delete-confirmation-dialog
        ref="deleteConfirmationDialog"
        heading="Cancel Confirmation"
        message="Are you sure you want to cancel this voucher?"
        @onConfirm="cancelVoucher"
      >
      </delete-confirmation-dialog>
    </v-list>
  </div>
</template>
<script>
import Permissions from '@/store/modules/admin/permissions'

export default {
  props: ['ad'],
  data: () => ({
    /**
     * Permissions Constants
     */
    CREATE: Permissions.actions.create,
    UPDATE: Permissions.actions.update,
    DELETE: Permissions.actions.delete,
    RESOURCE: Permissions.resources.featuredAdDetails,

    loading: false,
    code: '',
    timeDifference: {},
    timeDifferenceInterval: null,
  }),
  created() {
    if (this.ad.is_featured) {
      this.getTimeDifference(this.ad.featured.end_date)
    }
    if (this.ad.is_featured) {
      this.timeDifferenceInterval = setInterval(() => {
        if (this.ad.is_featured) {
          this.getTimeDifference(this.ad.featured.end_date)
        }
      }, 60000)
    }
  },
  methods: {
    openDeleteConfirmation() {
      this.$refs.deleteConfirmationDialog.openDialog()
    },
    parseDateString(dateString) {
      const parts = dateString.split(' ')
      const datePart = parts[0]
      const timePart = parts[1]

      const dateComponents = datePart.split('-')
      const year = parseInt(dateComponents[0], 10)
      const month = parseInt(dateComponents[1], 10) - 1 // Months are 0-indexed
      const day = parseInt(dateComponents[2], 10)

      const timeComponents = timePart.split(':')
      const hour = parseInt(timeComponents[0], 10) == 12 ? '00' : parseInt(timeComponents[0], 10)
      const minute = parseInt(timeComponents[1], 10)

      let date = new Date(year, month, day, hour, minute)

      console.log(hour, date)

      // Check for 'PM' in the time string and adjust hour accordingly
      if (parts[2] === 'PM') {
        date.setHours(hour + 12)
      }

      return date
    },
    getTimeDifference(anotherDate) {
      const oneMinute = 60 * 1000 // Number of milliseconds in one minute
      const oneHour = 60 * oneMinute // Number of milliseconds in one hour
      const oneDay = 24 * oneHour // Number of milliseconds in one day

      // Convert the date strings to Date objects
      const currentDateObj = new Date()
      const anotherDateObj = this.parseDateString(anotherDate)

      // Calculate the difference in milliseconds
      const diffMilliseconds = anotherDateObj - currentDateObj

      // Calculate days, hours, and minutes
      const diffDays = Math.floor(diffMilliseconds / oneDay)
      const remainingHours = Math.floor((diffMilliseconds % oneDay) / oneHour)
      const remainingMinutes = Math.floor((diffMilliseconds % oneHour) / oneMinute)

      this.timeDifference = { days: diffDays, hours: remainingHours, minutes: remainingMinutes }
    },
    applyVoucher() {
      // if (!this.$can(this.UPDATE, this.RESOURCE)) {
      //   return;
      // }

      let params = {
        featured_token: this.code,
        aduser_id: this.ad.user.id,
        ad_id: this.ad.id,
      }
      this.loading = true
      let test = this.$store
        .dispatch('activeVoucher', params)
        .then((res) => {
          this.code = ''
          ;(this.ad.is_featured = 1), console.log(res)
          this.getTimeDifference(res.data.featured.end_date)
        })
        .finally(() => {
          this.loading = false
        })

      console.log(test)
    },
    cancelVoucher() {
      // if (!this.$can(this.UPDATE, this.RESOURCE)) {
      //   return;
      // }
      clearInterval(this.timeDifferenceInterval)
      let params = {
        aduser_id: this.ad.user.id,
        ad_id: this.ad.id,
      }
      this.loading = true
      let test = this.$store
        .dispatch('cancelVoucher', params)
        .then(() => {
          this.ad.is_featured = 0
        })
        .finally(() => {
          this.loading = false
          this.$refs.deleteConfirmationDialog.close()
        })
    },
  },
}
</script>
