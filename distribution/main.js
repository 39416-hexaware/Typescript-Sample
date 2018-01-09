"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SampleApp = /** @class */ (function () {
    function SampleApp() {
        this.test = 'Test';
        this.name();
    }
    SampleApp.prototype.name = function () {
        console.log(this.test);
    };
    return SampleApp;
}());
exports.SampleApp = SampleApp;
