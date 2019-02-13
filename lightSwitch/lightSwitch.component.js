"use strict";
const lightSwitch = {
    bindings: {
        onFlip: "&"
    }
    ,
    template:
    `
        <button ng-click="$ctrl.onFlip()">SWITCH</button>
    `,
        
}
angular
.module("LightApp")
.component("lightSwitch", lightSwitch);