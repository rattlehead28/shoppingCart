var pr=angular.module('myApp',['ui.router']);
pr.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('mobileView',
	{
		url:"/mobiles",
		templateUrl:"mobiles.html",
		controller:'mobile_ctrl'
	})
	.state('laptopView',
	{
		url:"/laptops",
		templateUrl:"laptops.html",
		controller:'laptop_ctrl'
	})
	.state("detailView",
	{
		url:"/details",
		templateUrl:"detail.html",
		controller:"detail_ctrl"
	})
	.state('view',
	{
		url:"/cart",
		templateUrl:"view.html",
		controller:"view_ctrl"
	})
});

angular.module('myApp').controller('mainCtrl',function(){


});