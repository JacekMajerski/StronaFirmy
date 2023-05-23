$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: { 
                slidesToShow: 2,
            slidesYoScroll: 2 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
