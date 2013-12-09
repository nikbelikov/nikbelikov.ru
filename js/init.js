$(document).ready(function(){
	initHeader();
});

$(window).scroll(function(){
	var top_pos = $('body').scrollTop(),
		$sitename = $('.sitename');

	if (top_pos > 100) {
		$sitename.addClass('small');
	}
	else {
		$sitename.removeClass('small');
	}
});

initHeader = function(){
	$('.sitename').addClass('visible');
};