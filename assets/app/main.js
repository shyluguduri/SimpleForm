
// Create an application module for our demo.
var app = angular.module( "artists", [
						 'ngRoute',
						 'artistsHomeController',
						 'artistServices'	
		
]);
 
// Configure the routing. The $routeProvider will be automatically injected into 
// the configurator.
app.config(['$routeProvider',
	function( $routeProvider ){

		// Typically, when defining routes, you will map the route to a Template to be 
		// rendered; however, this only makes sense for simple web sites. When you are 
		// building more complex applications, with nested navigation, you probably need 
		// something more complex. In this case, we are mapping routes to render "Actions" 
		// rather than a template.
		 $routeProvider.
		 
	  when('/home', {
        templateUrl: 'assets/app/views/home.html',
        controller: 'artistsHomeCtrl'
      }).
	  
    
	 
      otherwise({
        redirectTo: '/home'
      });

	
}]);
