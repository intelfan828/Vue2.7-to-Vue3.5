<template>
  <v-container :class="colClasses">
    <div class="app-card" :class="customClasses">
      <v-card-text>
        <div class="layout justify-space-between pa-3">
          <div class="align-item-start">
            <h3 class="fw-bold mb-1">
              <count-to :startVal="0" :endVal="amount" :duration="5000"></count-to>
            </h3>
            <p class="ma-0 fs-12 fw-normal grey--text">{{ heading }}</p>
          </div>
          <div class="align-item-end">
            <h3 class="dash-icon"><i :class="icon"></i></h3>
          </div>
        </div>
      </v-card-text>
      <slot></slot>
    </div>
  </v-container>
</template>
<script>
export default {
  props: ['heading', 'amount', 'colClasses', 'customClasses', 'icon'],
}
</script>
