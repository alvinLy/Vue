new Vue({
	el: '#app',
	data: {
		output: 'this is output'
	},
	methods: {
		readRef: function(){
			console.log(this.$refs.value)
			this.output = this.$refs.input.value
		}
	}
})