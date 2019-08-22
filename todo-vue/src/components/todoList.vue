<template>
   <div class="todo">
		<input type="text" class="todo-input form-control" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
		
		<transition-group	name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
			<todoItem v-for="(item, index) in todosFilter" :key="item.id" :item="item" :index="index" :checkAll="!anyRemaining" />
		</transition-group>

		<div class="extra-container">
         <todoCheckAll :anyRemaining="anyRemaining" />
			<todoItemRemaining />
		</div>

		<div class="extra-container">
         <todoFilter />

			<div>
				<transition name="fade">
					<todoClearCompleted :showClearCompletedButton="showClearCompletedButton" />
				</transition>
			</div>
		</div>
   </div>
</template>

<script>
import todoItem from './todoItem'
import todoItemRemaining from './todoItemRemaining'
import todoCheckAll from './todoCheckAll'
import todoFilter from './todoFiltered'
import todoClearCompleted from './todoClearCompleted'

export default {
   name: 'todo-list',
   components: {
   	todoItem,
      todoItemRemaining,
      todoCheckAll,
      todoFilter,
      todoClearCompleted
   },
   data () {
      return {
      	newTodo: '',
      	idForTodo: 3,
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
      }
   },
   created(){
      eventBus.$on('removeTodo', (index) => this.removeTodo(index))
      eventBus.$on('finishedEdit', (data) => this.finishedEdit(data))
      eventBus.$on('checkAllChanged', (checked) => this.checkAllTodos(checked))
      eventBus.$on('filterChanged', (filter) => this.$store.state.filter = filter)
      eventBus.$on('clearCompletedTodos', () => this.clearCompleted())
   },
   beforeDestroy(){
      eventBus.$off('removeTodo', (index) => this.removeTodo(index))
      eventBus.$off('finishedEdit', (data) => this.finishedEdit(data))
      eventBus.$off('checkAllChanged', (checked) => this.checkAllTodos(checked))
      eventBus.$off('filterChanged', (filter) => this.$store.state.filter = filter)
      eventBus.$off('clearCompletedTodos', () => this.clearCompleted())
   },
   computed: {
   	remaining(){
   		return this.$store.getters.remaining
   	},
   	anyRemaining(){
   		return this.$store.getters.anyRemaining
   	},
   	todosFilter(){
         return this.$store.getters.todosFilter
   	},
   	showClearCompletedButton(){
   		return this.$store.getters.showClearCompletedButton
   	}
   },
   methods: {
   	addTodo(){
   		if (this.newTodo.trim().length == 0) {
   			return
   		}

   		this.$store.state.todos.push({
   			id: this.idForTodo,
   			title: this.newTodo,
   			completed: false
   		})

   		this.newTodo = ''
   		this.idForTodo++
   	},
   	removeTodo(id){
         const index = this.$store.state.todos.findIndex(item => item.id == id);
   		this.$store.state.todos.splice(index, 1);
   	},
   	checkAllTodos(){
   		this.$store.state.todos.forEach((item) => item.completed = event.target.checked)
   	},
   	clearCompleted(){
   		this.$store.state.todos = this.$store.state.todos.filter(item => !item.completed)
   	},
      finishedEdit(data){
         const index = this.$store.state.todos.findIndex(item => item.id == data.id);
         this.$store.state.todos.splice(data.index, 1, data.item);
      }
   }
}
</script>
