/**
 * Created by PC on 06/09/2016.
 */
App.controller('CallController', ["Call", "Entity", "$mdToast", "$mdDialog", "$scope", "$rootScope", function (Call, Entity, $mdToast, $mdDialog, $scope, $rootScope) {
    var me = this;
    this.call = {};
    this.ev;

    this.insertCall = function (organizationId) {
        this.call.type = "Call";
        this.call = new Call(this.call);
        call.insertCall("{organizationId:organizationId}");
    }

    this.apply = function (callId, cvId) {
        Call.apply({id: callId, cvId: cvId}, me.call, me.onApplyReady, function (error) {
            if (error.status === 403)
                me.onApplyNotAuthorized();
        });
    }

    this.onApplyReady = function () {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Congratulations you have applied for call!')
                .position("bottom right")
                .hideDelay(3000)
        );
    }

    this.onApplyNotAuthorized = function () {

    }

    this.sendOneOfMyCvs = function (call, ev) {
        this.ev = ev;
        this.call = call;
        this.getMyCvs();
    }

    this.getMyCvs = function () {
        if ($rootScope.auth.me) {
            Entity.query({
                    query: "",
                    type: "CV",
                    owner: $rootScope.auth.me.identifier.id,
                    offset: 0,
                    limit: 20
                }, me.onMyCvsReady,
                function (error) {
                    if (error.status == 403)
                        me.onNotAuthenticated();
                });
        } else me.onNotAuthenticated();
    }

    this.onMyCvsReady = function (cvs) {
        if (cvs.length == 1) {
            me.apply(me.call.identifier.id, cvs[0].identifier.id);
        }
        else if (cvs.length == 0) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Sorry you have no Resumes to send!')
                    .position("bottom right")
                    .hideDelay(3000)
            );
        } else {
            $mdDialog.show({
                locals: {
                    title: "Choose one of your cvs to send",
                    items: cvs
                },
                controller: "ChooseItemDialogController",
                controllerAs: "itemCtrl",
                templateUrl: "views/dialogs/chooseItemDialog.html",
                parent: angular.element(document.body),
                targetEvent: me.ev,
                clickOutsideToClose:true
            }).then(function (cv) {
                me.apply(me.call.identifier.id, cv.identifier.id);
            }, function () {

            });
        }
    }

    this.onNotAuthenticated = function () {
        var toast = $mdToast.simple()
            .textContent("You don't have access to your Resumes")
            .action('Login')
            .highlightAction(true)
            .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
            .position("bottom right");

        $mdToast.show(toast).then(function(response) {
            if (response == 'ok') {
                $state.go("auth");
            }
        });
    }
}]);