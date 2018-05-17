import Vuex from 'vuex';

const yearNow = new Date().getFullYear();

const store = () => new Vuex.Store({
	state: {
		name: 'AurhinDev',
		fullname: 'Jacob Eriksson',
		title: 'Crypto Analyst - Game Designer - Project Manager - Software Developer',
		social: {
			linkedin: 'https://www.linkedin.com/in/jacob-e-9482ab146/',
			github: 'https://github.com/AurhinDev',
			facebook: 'https://www.facebook.com/jacob.eriksson.98',
		},
		now: yearNow,
		yrs: yearNow - 2018,
		gaCode: 'UA-43291239-1',
	},
});

export default store;
