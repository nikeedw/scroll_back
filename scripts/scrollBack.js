let previousPosition;

function setScrollBack() {
	scrollTo({
		top: 0,
		left: 0,
		behavior: "instant"
	});
};

const borderScroll = document.querySelector('.left-border'); 
const sideScroll = document.createElement('div');
sideScroll.classList.add('left-scroll');

function handleScroll() {
	const scrolledPixels = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolledPixels >= 200) {
		sideScroll.innerHTML = 'Наверх';
    document.body.insertAdjacentElement(
			'beforeend',
			sideScroll
		);
		previousPosition = scrolledPixels;
		sideScroll.addEventListener('click', setScrollBack, {once: true});
  } else {
		sideScroll.innerHTML = '<svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fill-rule="evenodd"></path></svg>';
		sideScroll.addEventListener('click', () => {
			scrollTo({
				top: previousPosition,
				left: 0,
				behavior: "instant"
			})
		}, {once: true})
	};

	if(borderScroll.clientWidth < sideScroll.clientWidth) {
		document.body.removeChild(sideScroll);
	}
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);