var myApp = angular.module("MyApp", ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'docs/gettingstart.html'
    }).when('/ios', {
        templateUrl: 'docs/ios.html'
    }).when('/securitycredential', {
        templateUrl: 'docs/securitycredential.html'
    }).when('/webIntegration', {
        templateUrl: 'docs/webIntegration.html'
    }).when('/hostedcheckout', {
        templateUrl: 'docs/hostedcheckout.html'
    }).when('/citrusjs', {
        templateUrl: 'docs/citrusjs.html'
    }).when('/3rdpartyplugins', {
        templateUrl: 'docs/3rdpartyplugins.html'
    }).when('/mobileintegration', {
        templateUrl: 'docs/mobileintegration.html'
    }).when('/androidsdk', {
        templateUrl: 'docs/androidsdk.html'
    }).when('/androidintegration', {
        templateUrl: 'docs/androidintegration.html'
    }).when('/iossdk', {
        templateUrl: 'docs/iossdk.html'
    }).when('/iosintegration', {
        templateUrl: 'docs/iosintegration.html'
    }).when('/billgenerator', {
        templateUrl: 'docs/billgenerator.html'
    }).when('/returnurl', {
        templateUrl: 'docs/returnurl.html'
    }).when('/netbankingissuercodes', {
        templateUrl: 'docs/netbankingissuercodes.html'
    }).when('/mobileresponsecode', {
        templateUrl: 'docs/mobileresponsecode.html'
    }).when('/webresponsecode', {
        templateUrl: 'docs/webresponsecode.html'
    }).when('/webintegrationfaq', {
        templateUrl: 'docs/webintegrationfaq.html'
    }).when('/androidfaq', {
        templateUrl: 'docs/androidfaq.html'
    }).when('/iosfaq', {
        templateUrl: 'docs/iosfaq.html'
    }).when('/testcases', {
        templateUrl: 'docs/testcases.html'
    }).when('/transactionalerrors', {
        templateUrl: 'docs/transactionalerrors.html'
    }).when('/contactus', {
        templateUrl: 'docs/contactus.html'
    }).when('/errortroubleshooting', {
        templateUrl: 'docs/errortroubleshooting.html'
    }).when('/testcard', {
        templateUrl: 'docs/testcard.html'
    }).when('/enquiryrefundapi', {
        templateUrl: 'docs/enquiryrefundapi.html'
    })
        .otherwise({
            redirectTo: '/'
        });
});


myApp.service('anchorSmoothScroll', function () {
    this.scrollTo = function (eID) {
        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});

myApp.controller('ScrollCtrl', function ($scope, $location, anchorSmoothScroll) {
    $scope.gotoElement = function (eID) {
        anchorSmoothScroll.scrollTo(eID);
    };
});

myApp.controller('containController', function ($scope, $location, $timeout) {
    $scope.$location = $location;
    if ($location.path().replace("/", "") == "") {
        $scope.tabName = 'gettingstart';
    } else {
        $scope.tabName = $location.path().replace("/", "");
    }
    $scope.$on('$locationChangeSuccess', function () {
        if ($location.path().replace("/", "") == "") {
            $scope.tabName = 'gettingstart';
        } else {
            $scope.tabName = $location.path().replace("/", "");
        }
    });
    $scope.isActive = function (tabName) {
        return $scope.tabName === tabName;
    };
    $scope.$on('$viewContentLoaded', function (event) {
        angular.forEach(angular.element("pre code"), function (i, e) {
            hljs.highlightBlock(i);
        });
    });


    $scope.reqAllParam = false;
    $scope.toggleReqMenu = function (event) {
        $scope.reqAllParam = !($scope.reqAllParam);

        event.stopPropagation();
    };
    $scope.resAllParam = false;
    $scope.toggleResMenu = function (event) {
        $scope.resAllParam = !($scope.resAllParam);

        event.stopPropagation();
    };

});



