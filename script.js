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
        projectLink: 'https://github.com/benfields/collapsing-header'
    }, {
        img: '',
        headerText: 'Creative Buttons',
        blurbText: '',
        projectLink: 'https://github.com/benfields/creative-buttons'
    }, {
        img: '',
        headerText: 'Code Brush',
        blurbText: '',
        projectLink: 'https://github.com/benfields/code-brush'
    }, {
        img: '',
        headerText: 'tipit.js',
        blurbText: '',
        projectLink: 'https://github.com/benfields/tipit.js'
    }, {
        img: '',
        headerText: 'Highlight Color',
        blurbText: '',
        projectLink: 'https://github.com/benfields/highlight-color'
    }, {
        img: '',
        headerText: 'Arduino Pan/Tilt',
        blurbText: '',
        projectLink: 'https://github.com/benfields/arduino-pan-tilt'
    }, {
        img: '',
        headerText: 'shaker.java',
        blurbText: '',
        projectLink: 'https://github.com/benfields/shaker.java'
    }, {
        img: '',
        headerText: '404 Page',
        blurbText: '',
        projectLink: 'https://github.com/benfields/404-page'
    }, {
        img: '',
        headerText: 'Sepia Light UI',
        blurbText: '',
        projectLink: 'https://github.com/benfields/sepia-light-ui'
    }, {
        img: '',
        headerText: 'Code Edit',
        blurbText: '',
        projectLink: 'https://github.com/codeedit/dirt'
    }, {
        img: '',
        headerText: 'Just the Traffic',
        blurbText: '',
        projectLink: 'https://github.com/justthetraffic/justthetraffic.github.io'
    }, {
        img: '',
        headerText: 'Just the Weather',
        blurbText: '',
        projectLink: 'https://github.com/justtheweather/justtheweather.github.io'
    }, {
        img: '',
        headerText: 'Effeckt.css',
        blurbText: '',
        projectLink: 'https://github.com/h5bp/Effeckt.css/'
    }, {
        img: '',
        headerText: 'Copyright 2015, Ben Fields. All rights reserved.',
        blurbText: 'For the most up-to-date list of projects, please visit my GitHub profile.',
        style: 'background-color:#43434b; color: #ffffff;',
        linkStyle: 'display:none;',
        projectLink: 'https://github.com/benfields/'
    }];
    $scope.search = '';
    $scope.$watch('search', function(value) {
        regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
    });
    $scope.filterBySearch = function(gridItem) {
        if (!$scope.search) return true;
        return regex.test(gridItem.headerText + " " + gridItem.blurbText);
    };
    $scope.toggleBlurb = function($event) {
        console.log($event);
    };
});
