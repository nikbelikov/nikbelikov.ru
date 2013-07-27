$(document).ready(function(){
	initMenu();
	initBg();
	initCustomScrollbar();
	initFeedbackForm();
	$(window).resize();
});

window.addEventListener('load', function(){
	setTimeout(scrollTo, 0, 0, 1);
}, false);

function SmallScreen(){
	if ($(this).width()<1200){ return true }
	else { return false }
}

$(window).load(function(){
	GenerateBg(false);
	$('#portfolio').addClass('invisible');
}).resize(function(){
	var $block = $('#portfolio .block');
	var $img = $('#portfolio .block img');
	var $scrollbar = $('.mCustomScrollbar');

	if (SmallScreen()){
		// пересчет высоты контейнера портфолио
		$scrollbar.height($('html').height());

		// блоки в портфолио
		$block.height($img.height());
	}
	else {
		$scrollbar.attr('style', '');
		$block.attr('style', '');
	}
});

initMenu = function(){
	$('#wrapper').on('click',function(){
		if ($(this).hasClass('contacts') || $(this).hasClass('portfolio')) {
			$(this).removeClass('contacts portfolio disabled');
			$('#contacts, #portfolio').removeClass('visible');
		}
		$('html').removeClass('scroll');
	});

	$('#menu-contacts').on('click',function(event){
		if (!SmallScreen()) {
			event.preventDefault();
			event.stopPropagation();
			$('#contacts').addClass('visible');
			$('#wrapper').addClass('disabled');
			if (!$('#wrapper').hasClass('contacts')) {
				$('#wrapper').removeClass('portfolio').addClass('contacts');
			}
			$('html').addClass('scroll');
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
};

function GenerateBg(timer){
	var bg_count = 10;
	var bg_num = Math.round(Math.random()*(bg_count-1))+1;

	$('#hidden-img').attr('src', '/wp-content/themes/twentyten/img/summer/bg'+bg_num+'.jpg');

	$('#dark').removeClass('disabled');

	if (timer === true) {
		setTimeout(function(){
			$('#dark').addClass('disabled');
			$('#wrapper').attr('class', '').addClass('bg'+bg_num);
		}, 1000);
	}
	else {
		setTimeout(function(){
			$('#dark').addClass('disabled');
			$('#wrapper').attr('class', '').addClass('bg'+bg_num);
		}, 1000);
	}
}

initBg = function(){
	$('#icon-refresh').on('click',function(){
		GenerateBg(true);
	});
};

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
};

initFeedbackForm = function(){
	var $form = $('.wpcf7-form');
	var $btn = $form.find('input[type=submit]');

	$btn.on('click',function(){
		$form.addClass('blur').removeClass('invalid');
	});

	setInterval(function(){
		if ($form.hasClass('sent')){
			$form.removeClass('blur');
		}
	},500);
};