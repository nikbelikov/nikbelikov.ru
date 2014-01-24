$(document).ready(function(){
    initDayTime();
    initHeader();
    initProjects();
});

$(window).scroll(function(){
    var top_pos = $(window).scrollTop(),
        $sitename = $('.sitename'),
        $downicon = $('.down-icon');

    if (top_pos > 100) {
        $sitename.addClass('small cursor-pointer');
        $downicon.removeClass('visible');
    }
    else {
        $sitename.removeClass('small cursor-pointer');
        $downicon.addClass('visible');
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

    $('.down-icon').addClass('visible').on('click',function(){
        $('body, html').animate({scrollTop: 700},1000);
    });
};

initProjects = function(){
    $('.fa-expand').on('click',function(){
        var $block = $(this).parent();
        var body_height = $('body').outerHeight();

        if ($block.hasClass('expanded')) {
            // 400 - project container height
            $('body, html').animate({scrollTop: $block.offset().top-(body_height-400)/2});
        } else {
            $('body, html').animate({scrollTop: $block.offset().top});
        }
        $(this).toggleClass('fa-compress');
        $block.toggleClass('expanded');
    });
};