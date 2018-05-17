<template>
	<div>
		<div id="skills">
			<div class="row">
				<div class="col-9 push-1">
					<div class="col-12 such-smooth">
						<svg class="icon icon-be">
							<use xlink:href="sprite.svg#icon-be"></use>
						</svg>
						<h3>
							<b>Crypto Analytics</b>
						</h3>
						<hr class="dash">
						<p>
							I create websites which assure efficiency and user satisfaction,
							regardless of the device the users may be using.
							Websites are developed with a responsive layout,
							using progressive enhancement and tested for cross-browser compatibility,
							providing an optimal viewing experience.
						</p>
					</div>
					<div class="col-12 such-smooth">
						<svg class="icon icon-fe">
							<use xlink:href="sprite.svg#icon-fe"></use>
						</svg>
						<h3>
							<b>Game Design</b>
						</h3>
						<hr class="dash">
						<p>
							Whilst my main role is front end developer,
							I am experienced in using back-end technologies such as PHP,
							NodeJS and making use of WordPress or other tools
							(this site is built with Node, Express, Jade) to allow for content management
							of the sites I create. To have a good understanding of both disciplines
							has been hugely beneficial.
						</p>
					</div>
					<div class="col-12 such-smooth">
						<svg class="icon icon-fe">
							<use xlink:href="sprite.svg#icon-fe"></use>
						</svg>
						<h3>
							<b>Project Management</b>
						</h3>
						<hr class="dash">
						<p>
							Whilst my main role is front end developer,
							I am experienced in using back-end technologies such as PHP,
							NodeJS and making use of WordPress or other tools
							(this site is built with Node, Express, Jade) to allow for content management
							of the sites I create. To have a good understanding of both disciplines
							has been hugely beneficial.
						</p>
					</div>
					<div class="col-12 such-smooth">
						<svg class="icon icon-manage">
							<use xlink:href="sprite.svg#icon-manage"></use>
						</svg>
						<h3>
							<b>Software Development</b>
						</h3>
						<hr class="dash">
						<p>
							Whilst my main role is front end developer,
							I am experienced in using back-end technologies such as PHP,
							NodeJS and making use of WordPress or other tools
							(this site is built with Node, Express, Jade) to allow for content management
							of the sites I create. To have a good understanding of both disciplines
							has been hugely beneficial.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div id="extra">
			<div class="row">
				<div class="col-10 push-1">
					<section id="technologies" class="col-6 much-impressive">
						<em>technologies & tools I use on a daily basis</em>
						<em>html5, css3, sass, javascript, angularjs, grunt, gulp, bower, npm, nodejs, php, wordpress, vagrant</em>
					</section>
					<section id="conferences" class="col-6 much-impressive">
						<em>conferences attended recently</em>
						<em>WebCamp Zagreb 2015, WordCamp Zurich 2015, An Event Apart Boston 2015</em>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~assets/style';

	#skills {
		margin: 70px 0;
		text-align: center;

		.icon {
			display: block;
			margin: 0 auto 20px;

			&-fe,
			&-be {
				width: 32px;
				height: 32px;
			}
		}
	}

	#extra {
		padding: 50px 0;
		background-color: $light-grey;
		text-align: center;

		#technologies,
		#conferences {
			color: lighten($primary-color, 40%);

			em {
				@extend %ptag;
				font-size: medium;
				display: block;
				font-style: italic;
			}
		}
	}
</style>