"use strict";
const lightSwitch = {
    bindings: {
        onFlip: "&"
    }
    ,
    template:
    `
        <button ng-click="$ctrl.onFlip()"></button>
    `,
        
}
angular
.module("LightApp")
.component("lightSwitch", lightSwitch);