<template>
	<div id="contact" class="very-communicate">
		<div class="row">
			<div class="col-12">
				<h2 id="email">I'm interested</h2>
			</div>
		</div>
		<div class="row dontlikesmalltalkbtw">
			<div class="col-12">
				<a :href="$store.state.social.linkedin" target="_blank">
					<svg class="icon icon-linkedin">
						<use xlink:href="sprite.svg#icon-linkedin"></use>
					</svg>
				</a>
				<a :href="$store.state.social.github" target="_blank">
					<svg class="icon icon-github">
						<use xlink:href="sprite.svg#icon-github"></use>
					</svg>
				</a>
				<a :href="$store.state.social.facebook" target="_blank">
					<svg class="icon icon-facebook">
						<use xlink:href="sprite.svg#icon-facebook"></use>
					</svg>
				</a>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<small>{{ $store.state.now }} &copy; AurhinDev. Made in </small>
				<svg class="icon icon-ch">
					<use xlink:href="sprite.svg#icon-ch"></use>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	if (process.browser) {
		document.getElementById('email').onclick = () => {
			window.open(
				'mailto:aurhincrypto@gmail.com',
				'_blank'
			);
		};
	}
</script>

<style lang="scss">
	@import '~assets/style';

	#contact {
		padding: 70px 0;
		background-color: $primary-color;
		text-align: center;
		color: #FFF;

		#email {
			@include font-family-monospace;
			cursor: pointer;
			display: inline-block;
			border: 3px solid #FFF;
			padding: 10px 30px;
			border-radius: 5px;
			transition: all .2s ease;

			&:hover {
				border-color: $link-color;
			}
		}

		.dontlikesmalltalkbtw a {
			display: inline-block;
			margin: 0 5px;
			color: #FFF;
			transition: all .2s ease;

			&:hover {
				color: $link-color;
			}
		}

		small {
			@extend %ptag;
			font-size: small;
		}

		.icon-ch {
			vertical-align: text-bottom;
		}

		.icon-linked,
		.icon-github,
		.icon-facebook {
			width: 32px;
			height: 32px;
		}
	}
</style>