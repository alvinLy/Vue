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

Vue.directive('dropdown-menu', {
	bind(button, b, vnode, oldVnode) {
		console.log(b);
	   	const id = b.value
		button.addEventListener('click', (b) => {
			var elsToToggle = document.querySelectorAll(`[hide-name="${id}"]`);
			console.log(button, b.value, `[hide-name="${id}"]`, elsToToggle);
			console.log(button, " clicked");
			elsToToggle.forEach((el) => {
				console.log(el);
				el.classList.toggle('show');
			})
		}, false)
	}
});


new Vue({
	el:'#app',
	data: {}
})