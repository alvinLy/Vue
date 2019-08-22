module.exports = {
	title: 'My demo',
	description: 'This is description...',

	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Angular', link: '/angular/' },
			{ text: 'React', link: '/react/' },
			{ text: 'Vue', link: '/vue/' },
			{
				text: 'Languages',
				items: [
					{ text: 'Chinese', link: '/react/' },
					{ text: 'Japanese', link: '/vue/' }
				]
	      }
		],
		sidebar: ['/', '/angular/', '/react/', '/vue/']
	}
};