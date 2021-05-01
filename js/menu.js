document.addEventListener('DOMContentLoaded', function () {

	const burger = document.querySelector('.js-burger');
	const close = document.querySelector('.js-close');
	const menu = document.querySelector('.menu__toggle');
	const headerLogo = document.querySelector('.header__logo');
	const headerLanguage = document.querySelector('.header__language');
	const toggleHeader = document.querySelector('.toggle__header');
	const headerNav = document.querySelector('.header__nav');
	const headerContainer = document.querySelector('.header__container');
	const body = document.body;

	let keys = {
		ESC: 27,
	};

	function showMenu() {
		menu.classList.add('menu--showed');
		body.style.overflow = 'hidden';

		document.addEventListener('keydown', function (e) {
			if (e.keyCode == keys.ESC) {
				closeMenu();
			}
		});
	}

	function closeMenu() {
		menu.classList.remove('menu--showed');
		body.style.overflow = 'initial';
	}

	burger.addEventListener('click', function() {
		if(menu.classList.contains('menu--showed')) {
			closeMenu();
		} else {
			showMenu();
		}
	});
	// close.addEventListener('click', closeMenu);
});