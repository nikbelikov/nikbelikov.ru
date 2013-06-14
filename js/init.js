$(document).ready(function(){
	initMenu();
});

initMenu = function(){
	$('#wrapper').on('click', function(){
		if ($(this).hasClass('contacts') || $(this).hasClass('portfolio')) {
			$(this).removeClass('contacts portfolio disabled')
		}
	});

	$('#menu-contacts').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('#wrapper').addClass('disabled')
		if (!$('#wrapper').hasClass('contacts')) {
			$('#wrapper').removeClass('portfolio').addClass('contacts');
		}
	});

	$('#menu-portfolio, #icon-angle-down, #frontend').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('#wrapper').addClass('disabled')
		if (!$('#wrapper').hasClass('portfolio')) {
			$('#wrapper').removeClass('contacts').addClass('portfolio');
		}
	});
}