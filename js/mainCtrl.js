// angular.module("quoteBook").controller('mainCtrl', function($scope, dataService) {

  
//   // $scope.test = "c'mon baby!";
//   $scope.quotes = dataService.getData();
//   $scope.deleteMe = function(textToDelete) { //or is it textToRemove?
//     dataService.removeData(textToDelete);
//   }
//   $scope.addQuote = function() {
//     var newQuote = {
//       text:$scope.newQuoteText,
//       author:$scope.newQuoteAuthor
//     }
//     if(dataService.addData(newQuote)) {
//       $scope.newQuoteText = '';
//       $scope.newQuoteAuthor ='';
//     }
//   }
  
// });

angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
  $scope.quotes = dataService.getData();

  $scope.deleteMe = function(textToDelete) {
    dataService.removeData(textToDelete);
  }

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    if (dataService.addData(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  }
})

