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
})