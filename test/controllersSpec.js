'use strict';

describe('PersonListController', function() {

    var scope, ctrl, personServ

    beforeEach(module('onsControllers'));

    beforeEach(inject(function($rootScope, $controller, personService) {

        spyOn(personService, 'query').andReturn(mockComments);
        scope = $rootScope.$new();
        personServ = personService;


        ctrl = $controller('PersonListCtrl', {
            $scope: scope
        });

    }));


    it('Should fetch the personForm and put it on scope', function() {
        // expect
        // before the call to backend completes, we expect the comment to be undefined
        expect(scope.comments).toBeDefined();

    });

});