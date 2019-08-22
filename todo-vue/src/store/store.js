import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
   	filter: 'all',
   	todos: [
   		{
   			'id': 1,
   			'title': '1st line',
   			'completed': false,
   			'edit': false
   		},
   		{
   			'id': 2,
   			'title': '2nd line',
   			'completed': true,
   			'edit': false
   		},
   	]		
	},
	getters: {
   	remaining(state){
   		return state.todos.filter(item => !item.completed).length
   	},
   	anyRemaining(state, getters){
   		return getters.remaining != 0
   	},
   	todosFilter(state){
   		if (state.filter == 'all') {
   			return state.todos
   		} else if (state.filter == 'active') {
   			return state.todos.filter(item => !item.completed)
   		} else if (state.filter == 'completed') {
				return state.todos.filter(item => item.completed)
			}

   		return state.todos
   	},
   	showClearCompletedButton(state){
   		return state.todos.filter(item => item.completed).length > 0
   	}		
	}
})