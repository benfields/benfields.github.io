var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
    var regex;
    $scope.escapeRegExp = function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    $scope.gridItems = [{
        projectTitle: 'Collapsing Header',
        projectLink: 'https://github.com/benfields/collapsing-header',
        techType: 'Web',
        meta: ', parallax, header, image, background, collapse, collapsing, scroll, effect, css, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Creative Buttons',
        projectLink: 'https://github.com/benfields/creative-buttons',
        techType: 'Web',
        meta: ', click, button, buttons, depress, effect, dom, link, styling, css, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Code Brush',
        projectLink: 'https://github.com/benfields/code-brush',
        techType: 'Web',
        meta: ', highlighting, sytax, code, style, styling, styles, mit',
        license: 'MIT'
    }, {
        projectTitle: 'tipit.js',
        projectLink: 'https://github.com/benfields/tipit.js',
        techType: 'Web',
        meta: ', tooltip, data, hover, effect, css, js, tool, tip, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Highlight Color',
        projectLink: 'https://github.com/benfields/highlight-color',
        techType: 'Web',
        meta: ', css, hint, hack, trick, color, highlighting, highlight, select, selection, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Arduino Pan/Tilt',
        projectLink: 'https://github.com/benfields/arduino-pan-tilt',
        techType: 'Arduino',
        meta: ', arduino, software, program, camera, pan, tilt, mit',
        license: 'MIT'
    }, {
        projectTitle: 'shaker.java',
        projectLink: 'https://github.com/benfields/shaker.java',
        techType: 'Android',
        meta: ', android, java, shake, shaker, mit',
        license: 'MIT'
    }, {
        projectTitle: '404 Page',
        projectLink: 'https://github.com/benfields/404-page',
        techType: 'Web',
        meta: ', 404, page, not, found, html, css, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Sepia Light UI',
        
        projectLink: 'https://github.com/benfields/sepia-light-ui',
        techType: 'Add-on',
        meta: ', atom, editor, theme, add, on, plugin, css, html, js, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Code Edit',
        projectLink: 'https://github.com/codeedit/dirt',
        techType: 'Chrome App',
        meta: ', local, editor, html, css, js, text, chrome, chromium, dirt, gpl v3',
        license: 'GPL v3'
    }, {
        projectTitle: 'Just the Traffic',
        projectLink: 'https://github.com/justthetraffic/justthetraffic.github.io',
        techType: 'Web',
        meta: ', real, time, real-time, live, traffic, justthetraffic, html, css, apache v2',
        license: 'Apache v2'
    }, {
        projectTitle: 'Just the Weather',
        projectLink: 'https://github.com/justtheweather/justtheweather.github.io',
        techType: 'Web',
        meta: ', weather, real, time, real-time, justtheweather, html, css, mit',
        license: 'MIT'
    }, {
        projectTitle: 'Effeckt.css',
        projectLink: 'https://github.com/h5bp/Effeckt.css/',
        techType: 'Web',
        meta: ', effect, effeckt, css, style, styles, styling, click, hover, select, animate, animation, h5bp, mit',
        license: 'MIT'
    }, {
        projectTitle: 'benfields.github.io',
        projectLink: 'https://github.com/benfields/benfields.github.io/',
        techType: 'Web',
        meta: ', ben, fields, github, io, search, angular, hover, json, animate, animation, benfields, github.io, benfields.github.io, GPL, GPL v2, v2',
        license: 'GPL v2'
    }, {
        projectTitle: 'A Dark Room',
        icon: 'fa fa-code-fork',
        projectLink: 'https://github.com/benfields/adarkroom/',
        techType: 'Web',
        meta: ', room, dark, a, a dark, dark room, a dark room, js, game, browser, play, fun, web, mpl, v2, mpl v2, mozilla, fork, forked',
        license: 'MPL v2',
    }, {
        projectTitle: 'Copyright 2015, Ben Fields. All rights reserved.',
        icon: 'fa fa-copyright',
        blurbText: 'For the most up-to-date list of projects, please visit my GitHub profile.',
        style: 'background-color:#43434b; color: #ffffff;',
        linkStyle: 'display:none;',
        projectLink: 'https://github.com/benfields/',
        meta: ', copyright, ben, benjamin, fields, license, github, legal, privacy, info',
        licenseStyle: 'display: none;'
    }];
    $scope.search = '';
    $scope.$watch('search', function(value) {
        regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
    });
    $scope.filterBySearch = function(gridItem) {
        if (!$scope.search) return true;
        return regex.test(gridItem.projectTitle + " " + gridItem.blurbText + gridItem.techType + gridItem.projectLink + gridItem.meta);
    };
    $scope.toggleBlurb = function($event) {
        console.log($event);
    };
});