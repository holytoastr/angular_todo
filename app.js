'use strict';

(function(){
  angular
  .module('task', [])
  .controller('tasks_controller', TaskController );

  function TaskController() {
    var vm = this;
    vm.data = ['sample1',
              'sample2',
              'sample3'];

    vm.new_task = {};
    vm.create = function() {
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = {};
    };
  }
})();
