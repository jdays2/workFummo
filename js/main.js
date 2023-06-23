document.addEventListener("DOMContentLoaded", function(evt) {
	const swiper_banner = new Swiper('.swiper_banner', {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		effect: 'fade',
	});

	const swiper_novelties = new Swiper('.swiper_novelties', {
		slidesPerView: 4,
		navigation: {
			nextEl: ".novelties__top .swiper-button-next",
			prevEl: ".novelties__top .swiper-button-prev",
		},
	});

	$(document).on('click', '.novelties__filter_btn', function(evt) {
		evt.preventDefault();
		let $this = $(this);
		let thisPos = $this.position().left;
		let thisWidth = $this.outerWidth();
		let $indicator = $this.siblings('.indicator');

		$('.novelties__filter_btn').removeClass('active');
		$this.addClass('active');

		$indicator.css({
			left: thisPos + 'rem',
			width: thisWidth + 'rem',
		});
		
	})
})