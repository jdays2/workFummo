document.addEventListener("DOMContentLoaded", function(evt) { 
	const swiper_banner = new Swiper('.swiper_banner', {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		effect: 'fade',
	});
})