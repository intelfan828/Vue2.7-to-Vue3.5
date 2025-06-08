<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl pt-0>
      <app-card :fullBlock="true">
        <GMapMap :center="center" :zoom="9" style="width: '100%'; height: 400px">
          <GMapMarker
            :position="markers.position"
            :clickable="true"
            :draggable="false"
            @click="center = markers.position"
          >
          </GMapMarker>
        </GMapMap>
      </app-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'google-maps',
  data() {
    return {
      center: { lat: 30.7, lng: 76.7 },
      markers: {
        position: { lat: 30.7, lng: 76.7 },
      },
    }
  },
}
</script>
