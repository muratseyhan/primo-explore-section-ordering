angular.module('viewCustom').component('prmFullViewAfter', {
  bindings: {
    parentCtrl: '<',
  },
  controller: ['sectionOrdering', function(sectionOrdering) {
    var ctrl = this;

    ctrl.$onInit = function() {
      try {
        sectionOrdering.orderSections(ctrl.parentCtrl.services);
      } catch (e) {
        console.log(e.message);
      };
    };

  }]
});