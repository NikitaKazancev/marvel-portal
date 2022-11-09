export const addScrollToHeader = (): void => {
	let header: Element | null;

	window.addEventListener('scroll', (e: any) => {
		if (header) {
			if (window.scrollY >= 70) {
				if (!header.classList.contains('header_hide'))
					header.classList.add('header_hide');
			} else {
				if (header.classList.contains('header_hide'))
					header.classList.remove('header_hide');
			}
		} else {
			header = document.querySelector('.header');
		}
	});
};
