new Vue({
	el: '#app',
	data: {
		name: 'abc',
		job: 'Vue',
		url: 'https://www.google.com/',
		html: '<strong>This is HTML</strong>'
	},
	methods: {
		greet:function(sentence){
			return 'Hello ' + sentence + ' ' + this.name
		}
	}
})