$(document).ready(function(){

$("#slider").slider({
	min: 0,
	max: 20000,
	values: [5000,15000],
	range: true,
	slide: function (event, ui) {
		var leftValue = ui.values[ 0 ];
		var rightValue = ui.values[ 1 ];
		$('#left_side').html('<span>' + leftValue + ' грн' + '</span>');
		$('#right_side').html('<span>' + rightValue+ ' грн' + '</span>');
	}
});



$('#back__slider').slick({
	autoplay: true,
	pauseOnHover: false,
  	dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear'
});

});



