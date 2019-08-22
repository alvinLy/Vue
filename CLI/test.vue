<template>
	<div style="text-align:center">
		<p v-if="check" @click="check = !check">Check is true</p>
		<p v-if="!check" @click="check = !check">Check is false</p>
	</div>
</template>

<script>
export default{
	data(){
		return {
			check: false
		}
	}
}
</script>