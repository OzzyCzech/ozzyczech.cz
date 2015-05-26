<!--
title : AngularJS $http not sending X-Requested-With header
author : Roman Ožana <ozana@omdesign.cz>
date : 24.9.2014 09:48:49
tags : AJAX, angular, js
-->

# AngularJS $http not sending X-Requested-With header

<p id="toc_0">
  Angular <a href="https://docs.angularjs.org/api/ng/service/$http">$http</a> isn’t appending the header <code>X-Requested-With</code> = <code>XMLHttpRequest</code> since Angular 1.3.0.
</p>

> X-Requested-With header is rarely used in practice and by using it all the time we are riggering preflight checks for crossdomain requests.
> 
> See [commit message][1]

That can cause some problems on PHP side. If you need somehow differentiate XHR and common requests. For example Zend Framework and lot of others PHP frameworks use follow code:

    function isXmlHttpRequest() {
     return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
      $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
    }
    

You can easly addit on Angular side by following code:

    myAppModule.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }]);<p</p>

 [1]: https://github.com/angular/angular.js/commit/3a75b1124d062f64093a90b26630938558909e8d