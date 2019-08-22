// Vue.component('todo-item',{
// 	template: '<li>This is item</li>'
// })

// var app = new Vue({
// 	el: '#app',
// })

Vue.component('demo',{
	template: '<p>This is text {{name}} <button v-on:click="changeName">Button</button></p>',
	data: function(){
		return {
			name: 'Vue'
		}
	},
	methods: {
		changeName: function(){
			this.name = 'React'
		}
	}
})

var app01 = new Vue({
	el: '#app-one'
})

var app02 = new Vue({
	el: '#app-two'
})