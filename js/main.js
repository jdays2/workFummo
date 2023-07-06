document.addEventListener("DOMContentLoaded", function (evt) {

	const debounced = [];
	const cancelFunc = (timeout) => () => {
		clearTimeout(timeout);
	};
	let debounce = (fn, wait, ...args) => {
		let d = debounced.find(({ funcString }) => funcString === fn.toString());

		if (d) {
			d.cancel();
		} else {
			d = {};
			debounced.push(d);
		}

		d.func = fn;
		d.funcString = fn.toString();
		d.timeout = setTimeout(fn, wait, ...args);
		d.cancel = cancelFunc(d.timeout);
	};

	const swiper_banner = new Swiper('.swiper_banner', {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		effect: 'fade',
	});

	const swiper_novelties = new Swiper('.swiper_novelties', {
		slidesPerView: 1.22,
		navigation: {
			nextEl: ".novelties__top .swiper-button-next",
			prevEl: ".novelties__top .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
			}
		}
	});

	$(document).on('click', '.filter_btn', function (evt) {
		evt.preventDefault();
		let $this = $(this);
		let thisPos = $this.position().left;
		let thisWidth = $this.outerWidth();
		let $indicator = $this.siblings('.indicator');

		$('.filter_btn').removeClass('active');
		$this.addClass('active');

		$indicator.css({
			left: thisPos + 'rem',
			width: thisWidth + 'rem',
		});

	});

	$(document).on('input', 'textarea', function () {
		debounce(() => {
			this.style.height = 'auto';
			$(this).outerHeight((this.scrollHeight) + 'px');
		}, 100);
	});

	function headerState(documentScrollTop) {
		if (documentScrollTop > 1) {
			$('.header').addClass('header_min');
		} else {
			$('.header').removeClass('header_min');
		}
	}

	headerState($(document).scrollTop());

	$(document).on('scroll', function (evt) {
		let thisScroll = $(this).scrollTop();
		headerState(thisScroll);

		// let $responsibility = $('.responsibility');
		// let responseOffset = $responsibility.position().top;
		// let coef = ((thisScroll + 500) - responseOffset);

		// if (thisScroll + 500 > responseOffset) {
		// 	$('.responsibility__left').css('margin-top', coef + 'rem');
		// }
	});

	$(document).on('click', '.burger', function (evt) {
		evt.preventDefault();
		$('html').toggleClass('mob_menu');
		$(this).toggleClass('cross');
	});

	// $(document).on('wheel', function (evt) {
	// 	if (evt.originalEvent.wheelDelta >= 0) {
	// 		console.log('Вверх');
	// 	} else {
	// 		console.log('Вниз');
	// 	}
	// });



})