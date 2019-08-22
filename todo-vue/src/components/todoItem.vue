<template>
	<div class="todo-item">
		<div class="todo-item-left">
			<input type="checkbox" v-model="completed" @change="doneEdit">

			<div v-if="!edit" @dblclick="editTodo" class="todo-item-label" :class="{ completed : completed }">{{ title }}</div>

			<input v-else class="todo-item-edit" type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus>
		</div>
		
		<div class="">
			<button @click="pluralize">Plural</button>
			<span class="remove-item" @click="removeTodo(index)">&times;</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'todo-item',
	props: {
		item: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true			
		},
		checkAll: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			'id': this.item.id,
			'title': this.item.title,
			'completed': this.item.completed,
			'edit': this.item.edit,
			'beforeEditCache': ''
		}
	},
	created(){
		eventBus.$on('pluralize', this.handlePluralize)
	},
	beforeDestroy(){
		eventBus.$off('pluralize', this.handlePluralize)
	},
	watch: {
		checkAll() {
			// if (this.checkAll) {
			// 	this.completed = true
			// } else{
			// 	this.completed = this.item.completed
			// }

			this.completed = this.checkAll ? true : this.item.completed
		}
	},
   directives: {
   	focus: {
   		inserted: function(el){
   			el.focus()
   		}
   	}
   },
	methods: {
		removeTodo(id){
			const index = this.$store.state.todos.findIndex(item => item.id == id);
			this.$store.state.todos.splice(index, 1);
		},
   	editTodo(){
   		this.beforeEditCache = this .title
   		this.edit = true
   	},
   	doneEdit(){
   		if (this.title.trim().length == '') {
   			this.title = this.beforeEditCache
   		}

   		this.edit = false
			eventBus.$emit('finishedEdit', {
				'index': this.index,
				'item': {
					'id': this.id,
					'title': this.title,
					'completed': this.completed,
					'edit': this.edit
				}
			})
   	},
   	cancelEdit(){
   		this.title = this.beforeEditCache
   		this.edit = false   		
   	},
   	pluralize(){
   		eventBus.$emit('pluralize')
   	},
   	handlePluralize(){
   		this.title = this.title + 's'
   		
			eventBus.$emit('finishedEdit', {
				'index': this.index,
				'item': {
					'id': this.id,
					'title': this.title,
					'completed': this.completed,
					'edit': this.edit
				}
			})
   	}
	}
}
</script>