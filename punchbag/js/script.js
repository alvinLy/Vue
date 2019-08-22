var app = new Vue({
	el: '#app',
	data: {
		health: 0,
		ended: false
	},
	methods: {
		punch: function(){
			this.health += 20;
			if(this.health >= 100){
				this.ended = true;
			}
		},
		restart: function(){
			this.health = 0;
			this.ended =false
		}
	},
	computed: {

	}
})