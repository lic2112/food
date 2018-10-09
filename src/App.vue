<template>
	<div id="app">
		<loading v-show="bLoading" />
		<!-- <keep-alive> -->
		<router-view></router-view>
		<!-- </keep-alive> -->
		<elfoot v-show="bFoot" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import elfoot from '@/components/el-foot';
export default {
	components: { elfoot },
	methods: {
		routeChange(route) {
			let path = route.path;
			if ((/home|user|we|speak/.test(path))) {
				this.$store.dispatch('showFoot')
			}
			if (/detail|login|reg/.test(path)) {
				this.$store.dispatch('hideFoot')
			}
		}
	},
	computed: mapGetters([
		'bLoading', 'bFoot'
	]),
	watch: {
		$route(route) {
			this.routeChange(route)
		}
	}
}
</script>
<style>
</style>
