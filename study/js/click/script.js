var app = new Vue({
	el: '#app',
	data: {
		message: 'This is text'
	},
	methods: {
		reverseMessage: function(){
			this.message= this.message.split('').reverse().join('');
		}
	}
});