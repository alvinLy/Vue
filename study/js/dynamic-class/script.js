new Vue({
	el: '#app',
	data: {
		available: false,
		nearby: false
	},
	computed: {
		addClass: function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
})