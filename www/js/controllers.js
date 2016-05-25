angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, User) {
  User
  .getMeasure()
  .then(function(data) {
    console.log(data);
    $scope.user = data;
  });
})

.controller('ChatsCtrl', function($scope, User) {



})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
