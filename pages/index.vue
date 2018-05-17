<template>
	<div>
		<introduction/>
		<about/>
		<skills/>
		<contact/>
	</div>
</template>

<script>
	import Introduction from '~components/Introduction.vue';
	import About from '~components/About.vue';
	import Skills from '~components/Skills.vue';
	import Contact from '~components/Contact.vue';

	export default {
		components: {
			Introduction,
			About,
			Skills,
			Contact,
		},
	};
</script>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495E;
		letter-spacing: 1px;
	}

	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}

	.links {
		padding-top: 15px;
	}
</style>
