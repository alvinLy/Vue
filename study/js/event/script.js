new Vue({
	el: '#app',
	data: {
		age: '30',
		x: 0,
		y: 0
	},
	methods: {
		add: function(push){
			this.age += push;
		},
		minus: function(dec){
			this.age -= dec;
		},
		update: function(e){
			this.x = e.offsetX;
			this.y = e.offsetY;
		}
	}
})