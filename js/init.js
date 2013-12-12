$(document).ready(function(){
	initDayTime();
	initHeader();
	initProjects();
});

$(window).scroll(function(){
	var top_pos = $('body').scrollTop(),
		$sitename = $('.sitename');

	if (top_pos > 100) {
		$sitename.addClass('small cursor-pointer');
	}
	else {
		$sitename.removeClass('small cursor-pointer');
	}
});

initDayTime = function(){
	var hour = new Date();
	hour = hour.getHours();
	if(hour >= 19 || hour <= 7 ) {
		$('html').addClass('dark');
	}
};

initHeader = function(){
	$('.sitename').addClass('visible').on('click',function(){
		$('body').animate({scrollTop: 0});
	});
};

initProjects = function(){
	$('.fa-expand').on('click',function(){
		var $block = $(this).parent();
		var body_height = $('body').outerHeight();

		if ($block.hasClass('expanded')) {
			// 400 - project container height
			$('body').animate({scrollTop: $block.offset().top-(body_height-400)/2});
		} else {
			$('body').animate({scrollTop: $block.offset().top});
		}
		$(this).toggleClass('fa-compress');
		$block.toggleClass('expanded');
	});
};