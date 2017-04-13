
var app = angular.module("boxApp", [])
app.controller("modelCtrl", function ($scope, $rootScope) {
        
     
    $scope.order = [];
   
    $scope.items = [
            {
                id: 0,
                name: "Item 1",
                price: 10,
                templateUrl: 'http://localhost:58421/Images/AWS-icon.png',
                description: "some text",
                inBox: 0,
                count: "1",
               
               


            },
            {
                id: 1,
                name: "Item 2",
                price: 12,
                templateUrl: 'http://localhost:58421/Images/palet03.png',
                description: "some text2",
                inBox: 0,
                count: "1"
            },
            {
                id: 2,
                name: "Item 3",
                price: 15,
                templateUrl: 'http://localhost:58421/Images/Wood2.png',
                description: "some text2",
                inBox: 0,
                count: "1"
            }


    ];
           
    $scope.clickHandler = function (item) {
       
        $scope.order.push(item);
        console.log($scope.order);    
            
    }
  
  
    //counts +-
    $scope.plusOne = function (value) {
       value.count ++;
        value.price += 10;
    
    }

    $scope.minusOne = function (value) {
        value.count--;
        value.price -= 10;
    }

  
    // comunicate between $scope

    $scope.$on("zipCodeUpdated", function (event, args) {
        $scope[args.type] = args.zipCode;
      
    });

   
    $scope.setAddress = function (type, zip) {   
        $rootScope.$broadcast("zipCodeUpdated", {
            type: type, zipCode: $scope.order,
           
        });

        console.log("Type: " + type + " " + zip);
    };

    $scope.copyAddress = function () {
        $scope.shippingZip = $scope.billingZip;
    };

});





    
