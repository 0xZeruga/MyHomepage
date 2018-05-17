<template>
	<div id="introduction">
		<div id="bg">
			<div id="particles-js"></div>
		</div>
		<div class="name-container">
			<h1>{{ $store.state.name }}</h1>
			<div id="screen">
				<vue-typer
					:text="$store.state.title"
					:repeat='0'
					:pre-type-delay='800'
					:type-delay='80'
				></vue-typer>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~assets/style';

	#introduction {
		height: 100vh;
		position: relative;

		#bg {
			background-repeat: no-repeat;
			background-position: center center;
			background-attachment: fixed;
			background-image: url('/final_large.jpg');

			@include respond-to(small) {
				background-image: url('/final_small.jpg');
			}

			@include respond-to(medium) {
				background-image: url('/final_medium.jpg');
			}

			background-size: cover;
			height: 100%;

			#particles-js {
				background-color: rgba($primary-color, .8);
				height: 100%;
			}
		}

		.name-container {
			@include center;
			z-index: 3;
			color: #FFF;
			text-align: center;

			h1 {
				@include fadeInUp;
				background: rgba(#000, .15);
				padding: 10px 30px;
				text-shadow: 1px 1px 10px $primary-color;
				font-weight: 300;
				letter-spacing: 10px;
				font-size: 1.5em;

				@include respond-to(small) {
					font-size: 2.5em;
				}

				@include respond-to(medium) {
					font-size: 3.5em;
				}
			}

			#screen {
				@include fadeInUp;
				@include font-family-monospace;
				margin-top: 10px;
				font-size: 1em;

				@include respond-to(small) {
					font-size: 1.25em;
				}

				@include respond-to(medium) {
					font-size: 1.5em;
				}

				.vue-typer {
					.char {
						white-space: pre-wrap;

						&.custom {
							color: #FFF;
						}
					}

					.custom.caret {
						display: inline-block;
						width: 10px;
						background-color: #FFF;
					}
				}
			}
		}
	}
</style>