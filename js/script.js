import { btnHamburger, dialogMenu, backToTop, btnDarkMode, html } from '../module/tag.js';
import { cekScroll } from '../module/function.js';

window.addEventListener('DOMContentLoaded', function() {

	window.addEventListener('click', function(e) {
		if (e.target != btnHamburger && e.target != btnHamburger.firstElementChild && e.target != dialogMenu && e.target != btnDarkMode) {
			dialogMenu.classList.add('hidden');
			btnHamburger.firstElementChild.classList.replace('bx-x','bx-menu');
		}
	});

	window.addEventListener('scroll', function() {
		cekScroll(this, backToTop);
	})

	window.addEventListener('load', function() {
		cekScroll(this, backToTop);
	})

	btnHamburger.addEventListener('click', function() {		
		dialogMenu.classList.toggle('hidden');
		if (!dialogMenu.classList.contains('hidden')) {
			this.firstElementChild.classList.replace('bx-menu','bx-x');
			this.setAttribute('aria-expanded','true');
			dialogMenu.setAttribute('aria-hidden','false');
		} else {
			this.firstElementChild.classList.replace('bx-x','bx-menu');
			this.setAttribute('aria-expanded','false');
			dialogMenu.setAttribute('aria-hidden','true');
		}
	});

	btnDarkMode.addEventListener('click', function(e) {
		e.preventDefault();
		if (this.children[0].classList.contains('-top-[50%]')) {
			this.children[0].classList.replace('-top-[50%]','top-[50%]');
			this.children[1].classList.replace('top-[50%]','top-[150%]');
			html.classList.remove('dark');
		} else {
			this.children[1].classList.replace('top-[150%]','top-[50%]');
			this.children[0].classList.replace('top-[50%]','-top-[50%]');
			html.classList.add('dark');
		}
		// if (this.firstElementChild.classList.contains('bxs-moon')) {
		// 	this.firstElementChild.classList.replace('bxs-moon','bxs-sun');
		// } else {
		// 	this.firstElementChild.classList.replace('bxs-sun','bxs-moon');
		// }
		
	});
	
})

