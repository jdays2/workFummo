ymaps.ready(init);

function init() {
	// Создание карты
	const map = new ymaps.Map('map', {
		center: [55.747459, 37.62528],
		zoom: 14,
		type: 'yandex#map',
		yandexMapDisablePoiInteractivity: true,
		controls: [],
	});

	const setEventClick = (element, allElements) => {
		element.events.add('click', function (e) {
			const placemark = e.get('target');
			const iconHref = placemark.options.get('iconImageHref');
			const activeIconHref = './img/partners/geo-active.svg';

			if (iconHref === activeIconHref) {
				placemark.options.set('iconImageHref', './img/partners/geo.svg');
			} else {
				placemark.options.set('iconImageHref', activeIconHref);
				// Сброс остальных элементов к стандартному значению
				allElements.forEach((el) => {
					if (el !== placemark) {
						el.options.set('iconImageHref', './img/partners/geo.svg');
					}
				});
			}
		});
	};

	const customIcon1 = new ymaps.Placemark(
		[55.747459, 37.62528], // Координаты первой метки
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/partners/geo.svg',
			iconImageSize: [30, 30],
			iconImageOffset: [-16, -16],
		},
	);

	const customIcon2 = new ymaps.Placemark(
		[55.751003, 37.617964], // Координаты второй метки
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/partners/geo.svg',
			iconImageSize: [30, 30],
			iconImageOffset: [-16, -16],
		},
	);

	const customIcon3 = new ymaps.Placemark(
		[55.746324, 37.619387], // Координаты третьей метки
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/partners/geo.svg',
			iconImageSize: [30, 30],
			iconImageOffset: [-16, -16],
		},
	);

	const customIcon4 = new ymaps.Placemark(
		[55.751979, 37.625965], // Координаты четвертой метки
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/partners/geo.svg',
			iconImageSize: [30, 30],
			iconImageOffset: [-16, -16],
		},
	);

	const allIcons = [customIcon1, customIcon2, customIcon3, customIcon4];

	setEventClick(customIcon1, allIcons);
	setEventClick(customIcon2, allIcons);
	setEventClick(customIcon3, allIcons);
	setEventClick(customIcon4, allIcons);

	map.controls.remove('geolocationControl');
	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl');
	map.controls.remove('rulerControl');

	map.options.set({
		suppressMapOpenBlock: true,
		suppressObsoleteBrowserNotifier: true,
	});

	map.geoObjects.add(customIcon1);
	map.geoObjects.add(customIcon2);
	map.geoObjects.add(customIcon3);
	map.geoObjects.add(customIcon4);
}
