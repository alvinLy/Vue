new Vue({
	el: '#app',
	data: {
		age: 20,
		a: 0,
		b: 0
	},
	computed: {
		addA: function(){
			console.log('A');
			return this.a + this.age;
		},
		addB: function(){
			console.log('B');
			return this.b + this.age;
		},
	}
})