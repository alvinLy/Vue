var app = new Vue({
	el: '#app',
	data: {
		todos: [
			{text: 'abc'},
			{text: 'def'},
			{text: 'ghi'}
		]
	}
});

app.todos.push({text: 'kmn'})