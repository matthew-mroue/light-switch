"use strict";
const light = {
    template: `
    <section ng-class="{'lightOn' : $ctrl.isOn===true}">LIGHT</section>
    <light-switch on-flip="$ctrl.onFlip()"></light-switch>

    `,
    controller: [function() {
       const vm = this;
        vm.isOn = false; // light is off
        vm.onFlip = function() {
            // vm.isOn = !vm.isOn
            if (vm.isOn === true) { vm // light is on
                vm.isOn = false; 
            } else {
                vm.isOn = true;
            }
            
        }
          
      }]
    }
angular
.module("LightApp")
.component("light", light);