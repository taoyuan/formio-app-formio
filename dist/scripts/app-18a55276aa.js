!function(){"use strict";angular.module("formioAppTodo",["ngSanitize","ui.router","ui.bootstrap","formio","ngMap"])}(),function(){"use strict";angular.module("formioAppTodo").run(["$rootScope","AppConfig","Formio","$state",function(e,t,o,a){e.userLoginForm=t.appUrl+"/user/login",e.userRegisterForm=t.appUrl+"/user/register",e.todoForm=t.appUrl+"/todo",e.user||o.currentUser().then(function(t){e.user=t}),e.$on("$stateChangeStart",function(t,r){e.authenticated=!!o.getToken(),"auth"!==r.name.substr(0,4)&&(e.authenticated||(t.preventDefault(),a.go("auth.login")))});var r=function(){a.go("home")},n=function(){a.go("auth.login")};e.$on("formio.sessionExpired",n),e.$on("formio.unauthorized",r),e.logout=function(){o.logout().then(function(){a.go("auth.login")})["catch"](n)},e.isActive=function(e){return-1!==a.current.name.indexOf(e)}}])}(),function(){"use strict";function e(e,t,o,a,r){a.setBaseUrl(r.apiUrl),e.state("home",{url:"/",templateUrl:"views/main.html",controller:["$scope","$state","$rootScope",function(e,t,o){e.todos=[],e.todosUrl=o.todoForm+"/submission",e.getStatus=function(e){switch(e.data.status){case"notstarted":return"danger";case"started":return"info";case"done":return"success"}return""}}]}).state("auth",{"abstract":!0,url:"/auth",templateUrl:"views/user/auth.html"}).state("auth.login",{url:"/login",parent:"auth",templateUrl:"views/user/login.html",controller:["$scope","$state","$rootScope",function(e,t,o){e.$on("formSubmission",function(e,a){a&&(o.user=a,t.go("home"))})}]}).state("auth.register",{url:"/register",parent:"auth",templateUrl:"views/user/register.html",controller:["$scope","$state","$rootScope",function(e,t,o){e.$on("formSubmission",function(e,a){a&&(o.user=a,t.go("home"))})}]}),o.register("todo",function(){return{data:{status:"notstarted"}}}),t.otherwise("/")}angular.module("formioAppTodo").provider("Resource",["$stateProvider",function(e){var t={};return{register:function(o,a){t[o]=o;var r=o+"Form";e.state(o+"Index",{url:"/"+o,templateUrl:"views/resource/index.html",controller:["$scope","$state",function(e,t){e.resourceName=o,e.resourceForm=e[r],e.$on("submissionView",function(e,a){t.go(o+".view",{id:a._id})}),e.$on("submissionEdit",function(e,a){t.go(o+".edit",{id:a._id})}),e.$on("submissionDelete",function(e,a){t.go(o+".delete",{id:a._id})})}]}).state(o+"Create",{url:"/create/"+o,templateUrl:"views/resource/create.html",controller:["$scope","$state",function(e,t){e.resource=a?a():{},e.resourceForm=e[r],e.$on("formSubmission",function(e,a){t.go(o+".view",{id:a._id})})}]}).state(o,{"abstract":!0,url:"/"+o+"/:id",templateUrl:"views/resource/resource.html",controller:["$scope","$stateParams",function(e,t){e.resourceName=o,e.resourceForm=e[r],e.resourceUrl=e.resourceForm+"/submission/"+t.id}]}).state(o+".view",{url:"/",parent:o,templateUrl:"views/"+o+"/view.html",controller:["$scope","$stateParams","Formio",function(e,t,o){e.resource=a?a():{},e.position={lat:"40.74",lng:"-74.18"},new o(e.resourceUrl).loadSubmission().then(function(t){t.data.address&&(e.position.lat=t.data.address.geometry.location.lat,e.position.lng=t.data.address.geometry.location.lng),e.resource=t})}]}).state(o+".edit",{url:"/edit",parent:o,templateUrl:"views/resource/edit.html",controller:["$scope","$state",function(e,t){e.$on("formSubmission",function(e,a){t.go(o+".view",{id:a._id})})}]}).state(o+".delete",{url:"/delete",parent:o,templateUrl:"views/resource/delete.html",controller:["$scope","$state",function(e,t){e.$on("delete",function(){t.go("home")})}]})},$get:function(){return t}}}]).config(e),e.$inject=["$stateProvider","$urlRouterProvider","ResourceProvider","FormioProvider","AppConfig"]}(),function(){"use strict";angular.module("formioAppTodo").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}angular.module("formioAppTodo").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("formioAppTodo").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/user/auth.html",'<div class="col-md-8 col-md-offset-2"><div class="panel panel-default"><div class="panel-heading" style="padding-bottom: 0; border-bottom: none;"><ul class="nav nav-tabs" style="border-bottom: none;"><li role="presentation" ng-class="{active:isActive(\'auth.login\')}"><a ui-sref="auth.login()">Login</a></li><li role="presentation" ng-class="{active:isActive(\'auth.register\')}"><a ui-sref="auth.register()">Register</a></li></ul></div><div class="panel-body"><div class="row"><div class="col-lg-12"><div ui-view=""></div></div></div></div></div></div>'),e.put("app/user/login.html",'<formio src="userLoginForm"></formio>'),e.put("app/user/register.html",'<formio src="userRegisterForm"></formio>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);