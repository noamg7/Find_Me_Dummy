var app = angular.module('myApp', []);

app.factory('wikiService', function($http) {

    var wikiService = {
        // get: function(country) {
        //     return $http.jsonp('http://es.wikipedia.org/w/api.php?titles=' + country.name.toLowerCase() + '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK');
        get: function(individual) {
          return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Ccategories%7Cimages%7Ctemplates&titles=' + individual.name+ '&callback=JSON_CALLBACK');

        }
    };

    return wikiService;
});

app.controller('MainController', function($scope, wikiService) {
  $scope.wikiTodo = function(){
    wikiService.get($scope.search).then(function(data) {
        console.log(data);
        $scope.wikiData = data.data;
    });

  }

});
