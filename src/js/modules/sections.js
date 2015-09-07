"use strict";

var $ = require('jquery');

var Sections = {
    init: function () {
        // click on section
        $('.magic, .projects, .social').on('click', function () {
            var $body = $('body');
            var currentClass = $(this).attr('class');
            $body.removeClass('view-magic view-projects view-social');
            $body.addClass('view-' + currentClass);
        });

        // close section
        $('.close-section').on('click', function (e) {
            e.stopPropagation();
            $('body').removeClass('view-magic view-projects view-social');
        });
    }
};

module.exports = Sections;
