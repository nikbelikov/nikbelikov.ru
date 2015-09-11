"use strict";

var Sections = {
    init: function () {
        this.clickOnSection();
    },
    clickOnSection: function () {
        var body = document.querySelector('body');
        var sections = document.querySelectorAll('.menu li');

        for (var i = 0, sl = sections.length; i < sl; i++) {
            sections[i].onclick = function () {
                var currentClass = this.getAttribute('data-class');
                body.classList.remove('view-skills', 'view-about');
                body.classList.add('view-' + currentClass);
            }
        }
    }
};

module.exports = Sections;
