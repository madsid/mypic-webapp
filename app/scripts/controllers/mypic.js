'use strict';

/**
 * @ngdoc function
 * @name webappsApp.controller:MypicCtrl
 * @description
 * # MypicCtrl
 * Controller of the webappsApp
 */
angular.module('webappsApp')
  .controller('MypicCtrl', ['$scope','$http',function ($scope, $http) {
    $scope.user = {};

    document.getElementById('inputImage').addEventListener('change', function(){
      var file = this.files[0];  

      var img = document.getElementById('inputImagePreview');
      img.style.visibility = 'visible';
      img.file = file;

      var reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);

      var uploadUrl = 'http://www.madsid.com/mypic/upload_image';
      
      var fd = new FormData();
        fd.append('image', file);
        
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
          data = data.replace(/"([^"]+(?="))"/g, '$1'); 
          data = data.replace(/\\(.)/mg, "$1");
          $scope.images = data;
        })
        .error(function(){
        });

    }, false);

    $scope.sendData = function(){
      if (typeof $scope.user.details === "undefined") {
        $scope.user.details = "";
      }
      if (typeof $scope.user.email === "undefined" || $scope.user.email === "") {
        alert("Please Fill correct email");
      }
      else if (typeof $scope.user.phone === "undefined" || $scope.user.phone === "") {
        alert("Please Fill correct phone");
      }
      else if (typeof $scope.user.action === "undefined" || $scope.user.action === "") {
        alert("Please Fill correct option");
        console.log($scope.user);
      }
      else if (typeof $scope.images === "undefined" || $scope.images === "") {
        alert("Error Uploading image");
      }
      else{
        var data = {
          "app":"webApp",
          "email":$scope.user.email,
          "phone":$scope.user.phone,
          "details":$scope.user.details,
          "uploadedTime":new Date(),
          "images":$scope.images,
          "action":$scope.user.action
        }; 

        $http.post('http://www.madsid.com/mypic/data', {data:data})
        .success(function(data){
          console.log(data);
          $scope.user = {};

          var img = document.getElementById('inputImagePreview');
          img.style.visibility = 'hidden';
          document.getElementById('inputImage').value = null;
        })
        .error(function(){
        });
        

      }
    }
  }]);
