Vue.directive('swap-color', function(el, binding){
	const colors = binding.value
	let i = 0
	setInterval(() => {
		el.style.color = colors[i++]
		if (i > colors.length - 1) {
			i = 0
		}
	}, 500)
})

new Vue({
	el:'#app',
	data: {}
})