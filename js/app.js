
var app = angular.module("myModule", []);

app.controller("firstController", function($scope){
	$scope.message= "asdsadsad";
});

app.controller("listController", function($scope){
	var listemployees = [
		{firstname: "Q Ravi", lastname:"A shashtri", gender: "male", age: "25"},
		{firstname: "N Ravi", lastname:"V shashtri", gender: "Female", age: "25"},
		{firstname: "S Ravi", lastname:"B shashtri", gender: "male", age: "325"},
		{firstname: "T Ravi", lastname:"T shashtri", gender: "mFeale", age: "225"},
		{firstname: "U Ravi", lastname:"J shashtri", gender: "msale", age: "125"},
	]
	$scope.employees= listemployees;
});