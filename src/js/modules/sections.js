"use strict";

var riot = require('riot');
require('./../tags/magic.tag');
require('./../tags/projects.tag');
require('./../tags/social.tag');

var Sections = {
    init: function () {
        this.clickOnSection();
        this.clickOnCloseSection();
        this.data();
    },
    clickOnSection: function () {
        var body = document.querySelector('body');
        var sections = document.querySelectorAll('.magic, .projects, .social');

        for (var i = 0, sl = sections.length; i < sl; i++) {
            sections[i].onclick = function () {
                var currentClass = this.getAttribute('class');
                body.classList.remove('view-magic', 'view-projects', 'view-social');
                body.classList.add('view-' + currentClass);
            }
        }
    },
    clickOnCloseSection: function () {
        var body = document.querySelector('body');
        var closeSection = document.querySelectorAll('.close-section');

        for (var j = 0, l = closeSection.length; j < l; j++) {
            closeSection[j].onclick = function (e) {
                e.stopPropagation();
                body.classList.remove('view-magic', 'view-projects', 'view-social');
            }
        }
    },
    data: function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'json/data.json', true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                riot.mount('*', {data: data});
            } else {
                console.error('server returned an error');
            }
        };

        request.onerror = function () {
            console.error('connection error');
        };

        request.send();
    }
};

module.exports = Sections;
