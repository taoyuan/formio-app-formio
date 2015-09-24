!function(){"use strict";angular.module("formioAppTodo",["ngSanitize","ui.router","ui.bootstrap"])}(),function(){"use strict";function t(){function t(){return o}var o=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("formioAppTodo").service("webDevTec",t)}(),function(){"use strict";function t(t){function o(o,n,a,e){var r,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(o.extraValues,function(t){i.type(t).pause()["delete"]()}),r=o.$watch("vm.contributors",function(){angular.forEach(e.contributors,function(t){i.type(t.login).pause()["delete"]()})}),o.$on("$destroy",function(){r()})}function n(t,o){function n(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return o.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}var e=this;e.contributors=[],n()}var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],a}angular.module("formioAppTodo").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(){function t(t){var o=this;o.relativeDate=t(o.creationDate).fromNow()}var o={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],o}angular.module("formioAppTodo").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,o){function n(n){function e(t){return t.data}function r(o){t.error("XHR Failed for getContributors.\n"+angular.toJson(o.data,!0))}return n||(n=30),o.get(a+"/contributors?per_page="+n).then(e)["catch"](r)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",e={apiHost:a,getContributors:n};return e}angular.module("formioAppTodo").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t,o,n){function a(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function e(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=o.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1443107752715,i.showToastr=e,a()}angular.module("formioAppTodo").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("formioAppTodo").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,o){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),o.otherwise("/")}angular.module("formioAppTodo").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("formioAppTodo").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,o){t.debugEnabled(!0),o.options.timeOut=3e3,o.options.positionClass="toast-top-right",o.options.preventDuplicates=!0,o.options.progressBar=!0}angular.module("formioAppTodo").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("formioAppTodo").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);