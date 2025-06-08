<template>
   <div class="header-filter">
      <h5 class="text-sm-center mb-4">{{$t('message.headerFilters')}}</h5>
      <v-list>
         <v-list-item
            v-ripple="false"
            v-for="headerFilter in headerFilters"
            :class="{'active-theme': headerFilter === activeHeaderFilter}"
            @click="changeHeaderFilter(headerFilter)"
            :key="headerFilter.id"
         >
            <template v-slot:prepend>
               <!-- <span :class="'sidebar-overlay-'+headerFilter.class"></span> -->
               <span :class="headerFilter.class"></span>
            </template>
         </v-list-item>
      </v-list>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
   computed:{
      ...mapGetters(['headerFilters', 'activeHeaderFilter'])
   },
   methods: {
      changeHeaderFilter(filter) {
         console.log('=======',filter.class)
         this.$store.dispatch('changeHeaderFilter', filter);
      }
   }
}
</script>