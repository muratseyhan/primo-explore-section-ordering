function PrmFullViewAfter(sectionOrdering) {
  var ctrl = this;

  ctrl.$onInit = function () {
    sectionOrdering(ctrl.parentCtrl.services);
  };

}

app.component('prmFullViewAfter', {
  bindings: {
    parentCtrl: '<',
  },
  controller: ['sectionOrdering', PrmFullViewAfter],
});