jQuery(document).ready(function ($) {
	$('.carousel').each(function (key, element) {
		var wrapper = $(element);
		wrapper.slick({
			dots: false,
			arrows: wrapper.data('arrows'),
			infinite: true,
			speed: 500,
			slidesToShow: wrapper.data('items'),
			autoplay: wrapper.data('autoplay'),
			autoplaySpeed: 4000,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: wrapper.data('items-sm')
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: wrapper.data('items-xs')
				}
			}]
		});
	});

	$('.image-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		fade: true,
		asNavFor: '.text-slider'
	});

	$('.text-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.image-slider',
		dots: false,
		infinite: true,
		prevArrow: $('.text-slider').parent().find('.slick-prev'),
		nextArrow: $('.text-slider').parent().find('.slick-next'),
		fade: true
	});

});