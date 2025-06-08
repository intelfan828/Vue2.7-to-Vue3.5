<!-- Calendar Widget -->
<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid grid-list-xl py-0>
			<div class="app-card">
			<div class="app-card-content">
				<FullCalendar :events="fcEvents" lang="en"></FullCalendar>
			</div>
			</div>
		</v-container>
	</div>
</template>

<script>
import FullCalendar  from "@fullcalendar/vue3";
import events from "./events";

export default {
  data() {
    return {
      fcEvents: events
    };
  },
  components: {
    FullCalendar 
  }
};
</script>
