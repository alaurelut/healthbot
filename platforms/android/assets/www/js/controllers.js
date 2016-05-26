angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, User) {
  User
  .getMeasure()
  .then(function(data) {
    var measuregrps = data.body.measuregrps;
    $scope.user = {};

    for (var i = (measuregrps.length - 1); i >= 0; i--) {

      for (var y = 0; y < measuregrps[i].measures.length; y++) {
        var measure = measuregrps[i].measures[y];
        switch (measure.type) {
          case 1:
            $scope.user.weight = (measure.value / 10);
            break;
          case 4:
            $scope.user.height = measure.value;
            break;
          case 9:
            $scope.user.diastolicBloodPressure = measure.value;
            break;
          case 10:
            $scope.user.sistolicBloodPressure = measure.value;
            break;
          case 11:
            $scope.user.heartPulse = measure.value;
            break;
          default:

        }
      }
    }
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
