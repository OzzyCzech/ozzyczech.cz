# AngularJS $http not sending X-Requested-With header

#Angular [$http](https://docs.angularjs.org/api/ng/service/$http) isn’t appending the header `X-Requested-With` = `XMLHttpRequest` since Angular 1.3.0.

> X-Requested-With header is rarely used in practice and by using it all the time we are riggering preflight checks for crossdomain requests. See [ commit message](https://github.com/angular/angular.js/commit/3a75b1124d062f64093a90b26630938558909e8d)

 That can cause some problems on PHP side. If you need somehow differentiate XHR and common requests. For example Zend Framework and lot of others PHP frameworks use follow code:

```js
function isXmlHttpRequest() {
 return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
  $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
}
```

You can easily add  on Angular side by following code:

```js
myAppModule.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);
```
