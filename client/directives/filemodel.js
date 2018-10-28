
myApp.directive('fileModel', function() {

    return {
        link: function(scope, element, attrs) {

            element.find("#img").bind('error', function() {
                this.src = "/images/uploadimage.png"
                this.style.height = "120px" 
                this.style.width = "90px" 
                element.find("#file")[0].className = "ng-show form-control-file select"
                element[0].style.backgroundColor =  "#F8F8F8"
                element[0].style.margin = "auto"
        		element[0].style.width = "50%"
            })

            element.bind('change', function() {
                scope.$apply(function() {
                    scope.test = (element[0].children[1].files[0])
                    var reader = new FileReader();
                    reader.onload = function(loadEvent) {
                        scope.filePreview = loadEvent.target.result;
                        element[0].children[0].src = scope.filePreview
                        element[0].children[0].style.width = "180px"
                        element[0].children[0].style.height = "200px"
                        element.find("#file")[0].className = "ng-hide form-control-file select"
        				element[0].style.backgroundColor =  "white"
                    }
                    reader.readAsDataURL(scope.test);
                    element[0].children[0].className = "none"
                    scope.upload()

                })
            })


        }
    }
})