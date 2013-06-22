$(document).ready(function(){
	initMenu();
	initBg();
	$("#portfolio .content").mCustomScrollbar({
		scrollInertia:150,
		//autoHideScrollbar: true,
		advanced: {
			updateOnContentResize: true,
			updateOnBrowserResize: true
		}
	});
});

$(window).load(function(){
	GenerateBg(false);
});

initMenu = function(){
	$('#wrapper').on('click',function(){
		if ($(this).hasClass('contacts') || $(this).hasClass('portfolio')) {
			$(this).removeClass('contacts portfolio disabled');
			$('#contacts, #portfolio').removeClass('visible');
		}
	});

	$('#menu-contacts').on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$('#contacts').addClass('visible');
		$('#wrapper').addClass('disabled');
		if (!$('#wrapper').hasClass('contacts')) {
			$('#wrapper').removeClass('portfolio').addClass('contacts');
		}
	});

	$('#menu-portfolio, #icon-angle-down, #frontend').on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$('#portfolio').addClass('visible');
		$('#wrapper').addClass('disabled');
		if (!$('#wrapper').hasClass('portfolio')) {
			$('#wrapper').removeClass('contacts').addClass('portfolio');
		}
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) { $('#wrapper').click(); }
	});

	$('.close').on('click',function(){
		$('#wrapper').click();
	});
}

function GenerateBg(timer){
	var bg_count = 4;
	var bg_num = Math.round(Math.random()*(bg_count-1))+1;

	$('#dark').removeClass('disabled');

	if (timer === true) {
		setTimeout(function(){
			$('#dark').addClass('disabled');
			$('#wrapper').removeClass('bg01 bg02 bg03 bg04').addClass('bg0'+bg_num);
		}, 500);
	}
	else {
		$('#dark').addClass('disabled');
		$('#wrapper').removeClass('bg01 bg02 bg03 bg04').addClass('bg0'+bg_num);
	}
}

initBg = function(){
	$('#icon-refresh').on('click',function(){
		GenerateBg(true);
	});
}