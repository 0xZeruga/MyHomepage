require('particles.js');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const numberOfParticles = .00004 * (windowWidth * windowHeight);
let timeOut;

const addParticle = () => {
	if (window.pJS_GUI.particles.array.length > numberOfParticles) {
		clearTimeout(timeOut);
		return;
	}

	window.pJS_GUI.particles.array.push(new window.pJS_GUI.fn.particle(
		{ value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'] },
		500
	));

	timeOut = setTimeout(addParticle, 60);
};

const afterParticlesLoaded = () => {
	window.pJS_GUI = window.pJSDom[0].pJS;

	addParticle();
};

window.particlesJS.load('particles-js', '/particles.json', afterParticlesLoaded);
