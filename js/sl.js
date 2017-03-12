$('.bg-slider').slick({
	autoplay:true,
	autoplaySpeed:5000,
	speed:1000,
	arrows:false,
	dots:false,
	cssEase: 'linear',
	fade:true,
	pauseOnHover: false,
	pauseOnFocus: false,
	asNavFor: '.header-sl',
	focusOnSelect:true
});

$('.header-sl').slick({
	dots:true,
	arrows:false,
	asNavFor: '.bg-slider',
	initialSlide:1,
	infinite: true,
	autoplay:true,
	autoplaySpeed:5000,
	speed:1000
});

var sl = $('.order__sl').slick({
	slidesToShow:2,
	centerMode:true,
	centerPadding:'435px'
});


$('.order-slide__arrow_left').on('click', function() { sl.slick('slickPrev'); });
$('.order-slide__arrow_right').on('click', function() { sl.slick('slickNext'); });
