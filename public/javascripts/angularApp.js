var app = angular.module('bookbuddy', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $stateProvider
    .state('books', {
      url: '/books',
      templateUrl: '/books.html',
      controller: 'BooksCtrl'
  });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('books', ['$http', function($http){
  var o = {
    books: []
  };

  o.searchBooks = function(query){
    console.log('we are in service now: ' + query);
    return $http.get('/books/' + query).success(function(data){
      angular.copy(angular.fromJson(data).items, o.books);
    }).error(function(data){
      console.log('error: ' + data)
    });
  };
  return o;
}]);


app.controller('MainCtrl', ['$scope', 'posts', 
function($scope, posts){
  $scope.posts = posts.posts;

$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: [
      {author: 'Joe', body: 'Cool post!', upvotes: 0},
      {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
    ]
  });
  $scope.title = '';
  $scope.link = '';
};

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

}]);

app.controller('BooksCtrl', [
'$scope',
'$stateParams',
'books',
function($scope, $stateParams, books){

  $scope.query = '';
  $scope.books = books.books;

  $scope.searchBooks = function(query){
    books.searchBooks(query);
  };

}]);