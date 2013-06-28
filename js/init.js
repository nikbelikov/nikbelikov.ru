$(document).ready(function(){
	initMenu();
	initBg();
	initCustomScrollbar();
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
		if (e.keyCode == 40) {
			if (!$('#wrapper').hasClass('portfolio')) {
				$('#wrapper').click(); $('#menu-contacts').click();
			}
			else { $('#wrapper').click(); }
		}
		if (e.keyCode == 38) {
			if (!$('#wrapper').hasClass('contacts')) {
				$('#wrapper').click(); $('#menu-portfolio').click();
			}
			else { $('#wrapper').click(); }
		}
	});

	$('.close').on('click',function(){
		$('#wrapper').click();
	});
}

function GenerateBg(timer){
	var bg_count = 14;
	var bg_num = Math.round(Math.random()*(bg_count-1))+1;

	$('#dark').removeClass('disabled');

	if (timer === true) {
		console.log(bg_num);
		setTimeout(function(){
			$('#dark').addClass('disabled');
			$('#wrapper').attr('class', '').addClass('bg'+bg_num);
		}, 500);
	}
	else {
		$('#dark').addClass('disabled');
		$('#wrapper').attr('class', '').addClass('bg'+bg_num);
	}
}

initBg = function(){
	$('#icon-refresh').on('click',function(){
		GenerateBg(true);
	});
}

initCustomScrollbar = function(){
	$("#portfolio .content").mCustomScrollbar({
		scrollInertia:150,
		autoHideScrollbar: true,
		advanced: {
			updateOnContentResize: true,
			updateOnBrowserResize: true
		},
		contentTouchScroll: true
	});
}