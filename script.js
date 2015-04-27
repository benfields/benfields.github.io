/**
 ____               ______ _      _     _
 |  _ \             |  ____(_)    | |   | |
 | |_) | ___ _ __   | |__   _  ___| | __| |___
 |  _ < / _ \ '_ \  |  __| | |/ _ \ |/ _` / __|
 | |_) |  __/ | | | | |    | |  __/ | (_| \__ \
 |____/ \___|_| |_| |_|    |_|\___|_|\__,_|___/

 Created by Ben Fields on Sunday, April 26, 2015 (4/26/15).
 Copyright (c) 2015, Ben Fields. All rights Reserved.
 This page is made available through the terms and conditions provided in the LICENSE file. We use GPL v2.
 **/

var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
    var regex;
    $scope.escapeRegExp = function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    $scope.gridItems = [{
        img: '',
        headerText: 'Collapsing Header',
        blurbText: '',
        projectLink: 'https://github.com/benfields/collapsing-header',
        techType: 'Web',
        meta: ', parallax, header, image, background, collapse, collapsing, scroll, effect, css, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Creative Buttons',
        blurbText: '',
        projectLink: 'https://github.com/benfields/creative-buttons',
        techType: 'Web',
        meta: ', click, button, buttons, depress, effect, dom, link, styling, css, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Code Brush',
        blurbText: '',
        projectLink: 'https://github.com/benfields/code-brush',
        techType: 'Web',
        meta: ', highlighting, sytax, code, style, styling, styles, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'tipit.js',
        blurbText: '',
        projectLink: 'https://github.com/benfields/tipit.js',
        techType: 'Web',
        meta: ', tooltip, data, hover, effect, css, js, tool, tip, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Highlight Color',
        blurbText: '',
        projectLink: 'https://github.com/benfields/highlight-color',
        techType: 'Web',
        meta: ', css, hint, hack, trick, color, highlighting, highlight, select, selection, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Arduino Pan/Tilt',
        blurbText: '',
        projectLink: 'https://github.com/benfields/arduino-pan-tilt',
        techType: 'Arduino',
        meta: ', arduino, software, program, camera, pan, tilt, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'shaker.java',
        blurbText: '',
        projectLink: 'https://github.com/benfields/shaker.java',
        techType: 'Android',
        meta: ', android, java, shake, shaker, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: '404 Page',
        blurbText: '',
        projectLink: 'https://github.com/benfields/404-page',
        techType: 'Web',
        meta: ', 404, page, not, found, html, css, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Sepia Light UI',
        blurbText: '',
        projectLink: 'https://github.com/benfields/sepia-light-ui',
        techType: 'Add-on',
        meta: ', atom, editor, theme, add, on, plugin, css, html, js, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Code Edit',
        blurbText: '',
        projectLink: 'https://github.com/codeedit/dirt',
        techType: 'Chrome App',
        meta: ', local, editor, html, css, js, text, chrome, chromium, dirt, gpl v3',
        license: 'GPL v3'
    }, {
        img: '',
        headerText: 'Just the Traffic',
        blurbText: '',
        projectLink: 'https://github.com/justthetraffic/justthetraffic.github.io',
        techType: 'Web',
        meta: ', real, time, real-time, live, traffic, justthetraffic, html, css, apache v2',
        license: 'Apache v2'
    }, {
        img: '',
        headerText: 'Just the Weather',
        blurbText: '',
        projectLink: 'https://github.com/justtheweather/justtheweather.github.io',
        techType: 'Web',
        meta: ', weather, real, time, real-time, justtheweather, html, css, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'Effeckt.css',
        blurbText: '',
        projectLink: 'https://github.com/h5bp/Effeckt.css/',
        techType: 'Web',
        meta: ', effect, effeckt, css, style, styles, styling, click, hover, select, animate, animation, h5bp, mit',
        license: 'MIT'
    }, {
        img: '',
        headerText: 'benfields.github.io',
        blurbText: '',
        projectLink: 'https://github.com/benfields/benfields.github.io/',
        techType: 'Web',
        meta: ', ben, fields, github, io, search, angular, hover, json, animate, animation, benfields, github.io, benfields.github.io, GPL, GPL v2, v2',
        license: 'GPL v2'
    }, {
        img: '',
        headerText: 'Copyright 2015, Ben Fields. All rights reserved.',
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
        return regex.test(gridItem.headerText + " " + gridItem.blurbText + gridItem.techType + gridItem.projectLink + gridItem.meta);
    };
    $scope.toggleBlurb = function($event) {
        console.log($event);
    };
});
