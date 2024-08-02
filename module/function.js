export function cekScroll (target, tag) {
	if (target.scrollY > 80) {
		tag.classList.remove('hidden');
		tag.setAttribute('aria-hidden','false');
	} else {
		tag.classList.add('hidden');
		tag.setAttribute('aria-hidden','true');
	}
}