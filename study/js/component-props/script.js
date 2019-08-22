Vue.component('todo-item', {
	props: ['ax'],
	template: '<li>{{ ax.name }}</li>'
})

var app = new Vue({
	el: '#app',
	data: {
		itemList: [
			{ id:1, name: 'ABC' },
			{ id:2, name: 'DEF' },
			{ id:3, name: 'GTH' }
		]
	}
})