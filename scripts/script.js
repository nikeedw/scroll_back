function setScrollBack() {
	scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
};

const sideScroll = document.createElement('div');
sideScroll.classList.add('left-scroll');
sideScroll.innerHTML = 'Наверх';

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

sideScroll.style.height = `${scrollHeight}px`

document.body.insertAdjacentElement(
	'beforeend',
	sideScroll
);

sideScroll.addEventListener('click', () => setScrollBack());