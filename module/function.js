export function cekScroll (target, tag) {
	if (target.scrollY > 80) {
		tag.classList.remove('hidden');
		tag.setAttribute('aria-hidden','false');
	} else {
		tag.classList.add('hidden');
		tag.setAttribute('aria-hidden','true');
	}
}

export function textAnimation(element) {
	let textCek = [element.innerHTML,'I,M Full-Stack Developer','I,M Designer Web'];
	let cek = false;
	let t = 0;
	let i = element.innerHTML.length;
	let delay = 500;

	setInterval(() => {
		setTimeout(() => {

			if (cek) {
				element.innerHTML = textCek[t].slice(0, i);
				i++;
			} else {
				element.innerHTML = textCek[t].slice(0, i);
				i--;
			}

			if (i == 0) {
				cek = true;
				delay = 500;
				if (t == 0) {
					t = 1;
				} else if(t == 1) {
					t = 2;
				} else {
					t = 0;
				}	
			} else if(i == textCek[t].length){
				cek = false;
				delay = 2000;
			}

		}, delay)	
	}, 300);


}