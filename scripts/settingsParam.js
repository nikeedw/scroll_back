const menu = document.querySelector('.open_menu');
const rightSection = document.querySelector('.right-section');

rightSection.addEventListener('click', () => {
  menu.classList.toggle('active_menu');

  if (menu.classList.contains('active_menu')) {
    rightSection.classList.add('active_rs');
  } else {
    rightSection.classList.remove('active_rs');
  }
});

const rightBorder = document.querySelector('.right-border');
rightBorder.addEventListener('click', () => {
  menu.classList.remove('active_menu');
	rightSection.classList.remove('active_rs');
});

const mainList = document.querySelector('.main_list');
mainList.addEventListener('click', () => {
  menu.classList.remove('active_menu');
	rightSection.classList.remove('active_rs');
});
