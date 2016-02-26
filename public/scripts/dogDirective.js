myApp.directive('dogDirective',
    function() {
        return {
            restrict: 'E',  //<restrict DOM elements. this is needed
            scope:  {		//allow the equals sign from the template.
                info: '='   //allows info.person to exist.
            },
            tempateURL:  '../views/templates/dog.html',
            controller: 'dogController'  //says where ever this directive lives, talk to IndexController
        }
    }
);