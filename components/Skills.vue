<template>
	<div>
		<div id="skills">
			<div class="row">
				<div class="col-9 push-1">
					<div class="col-12 such-smooth">
						<svg class="icon icon-fe">
							<use xlink:href="sprite.svg#icon-fe"></use>
						</svg>
						<h3>
							<b>Crypto Analytics</b>
						</h3>
						<hr class="dash">
						<p>
							Are you one of those who feel a bit lost when wandering among all these new currencies? I offer guidance to help you navigate and can also supply you with advise to reduce the risk of your investments. By listening to your needs and determining your risk profile I will offer you a portfolio that fits your needs. I have years of experience in the investment market and use a combination of technical and fundamental analysis, as well as a stop-loss strategy, to help you maximize your gains.
						</p>
					</div>
					<div class="col-12 such-smooth">
						<svg class="icon icon-be">
							<use xlink:href="sprite.svg#icon-be"></use>
						</svg>
						<h3>
							<b>Game Design</b>
						</h3>
						<hr class="dash">
						<p>
							I'm a Game Designer since early childhood, a time when I started tweaking games in order to experiment with rules. This, combined with a mathematical mindset, 3 years of University Education, and more than 10 created games, has with time made me a great game designer. By establishing your demands and determining the target audience, I will bring a mixture of hard analysis and refreshing creativity to your project that may make you reconsider certain decisions.
						</p>
					</div>
					<div class="col-12 such-smooth">
						<svg class="icon icon-be">
							<use xlink:href="sprite.svg#icon-be"></use>
						</svg>
						<h3>
							<b>Project Management</b>
						</h3>
						<hr class="dash">
						<p>
							I have experience of managing four projects form start to finish. With in-depth knowledge of group psychology and leadership, as well as familarity with several management principles (waterfall, gannt, agile, scrum), I will lead your team until we reach your envisioned goal. Starting off by considering all aspects of implementation and determining timeframe and deadlines, we will move towards understanding the employees' most productive areas. From there, we can successfully put the plan into action. I'm also able to deliver on weekly/monthly reconciliation to further ensure that the project is progressing accordingly.
						</p>
					</div>
					<div class="col-12 such-smooth">
						<svg class="icon icon-fe">
							<use xlink:href="sprite.svg#icon-fe"></use>
						</svg>
						<h3>
							<b>Software Development</b>
						</h3>
						<hr class="dash">
						<p>
							I have 5 years of programming experience where I have worked with everything from game development to devops and blockchain technology. I can help your team with your game, website or desktop applications in a variety of languages and frameworks. I also have expertise in creating ICOs/Crowdfunds and DApps. Whether you hire me to implement some new functionality, refactor your codebase or just to start a project from scratch, is up to you.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div id="extra">
			<div class="row">
				<div class="col-12 push-1">
					<section id="techexp" class="col-3 much-impressive">
						<h3>Tech & Tools (Experienced)</h3>
						<p></p>
						<em>C#, Java, Python, Solidity, Git,  Unity, Vagrant, Node.js, Npm</em>
					</section>
					<section id="techint" class="col-3 much-impressive">
						<h3>Tech & Tools (Intermediate)</h3>
						<p></p>
						<em>C++, Golang, Docker, Jenkins, UE4, Linux, HTML,CSS, Javascript, Vue, Redis, MongoDB</em>
					</section>
					<section id="technov" class="col-3 much-impressive">
						<h3>Tech & Tools (Novice)</h3>
						<p></p>
						<em>Kubernetes, Rust, AWS, SQL, React </em>
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

		#techexp,
		#technov,
		#techint {
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