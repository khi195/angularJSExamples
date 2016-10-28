var app = angular.module('submitForm', []);


app.controller('submit', function($scope){

// define a array for storing the values

$scope.submitArray = [];
$scope.submit = function(){

$scope.submitArray.push(this.submitMessage);

}


$scope.delete = function(){

// element to delete
var elementPosition = $scope.submitArray.length - 1;

// delete the last element 
$scope.submitArray.splice(elementPosition, 1);

//
console.log($scope.submitArray);
};




});