<template>
   <div id="app" class="container">
      <h1 class="text-center">Todo List</h1>

      <todoList/>
   </div>
</template>

<script>
import './assets/style.scss'
import todoList from './components/todoList'

export default {
   name: 'App',
   components: {
      todoList
   }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

* {
	box-sizing: border-box;
}
.container {
	max-width: 600px;
	margin: 0 auto;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 24px;
}
</style>
