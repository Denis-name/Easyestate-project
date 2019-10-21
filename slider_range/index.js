jQuery("#slider").slider({
	min: 0,
	max: 1000,
	values: [300,700],
	range: true,
	slide: function (event, ui) {
		var leftValue = ui.values[ 0 ];
		var rightValue = ui.values[ 1 ];
		$('#left_side').html('<span>' + leftValue + ' грн' + '</span>');
		$('#right_side').html('<span>' + rightValue+ ' грн' + '</span>');
	}
});

