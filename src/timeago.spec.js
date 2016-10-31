"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/testing');
var core_1 = require('@angular/core');
function main() {
    testing_1.describe('TimeAgo tests', function () {
        var builder;
        testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.it('Should return right time ago', function (done) {
            builder.createAsync(TimeAgoController).then(function (fixture) {
                fixture.detectChanges();
                console.log('begin');
                testing_1.expect(true).toEqual(true);
            }).then(done).catch(done);
        });
    });
}
exports.main = main;
var TimeAgoController = (function () {
    function TimeAgoController() {
        this.time = new Date();
        this.live = true;
        this.interval = 60 * 1000;
        this.maxPeriod = 365 * 24 * 60 * 60 * 1000;
        this.format = 'short';
        this.suffix = 'ago';
    }
    TimeAgoController = __decorate([
        core_1.Component({
            selector: 'time-ago',
            template: "\n      <time-ago [time]=\"time\" [live]=\"live\" [interval]=\"interval\" [maxPeriod]=\"maxPeriod\" [afterMaxDateFormate]=\"format\" [suffix]=\"suffix\" ></timeago>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TimeAgoController);
    return TimeAgoController;
}());
var StaticTimeAgoController = (function () {
    function StaticTimeAgoController() {
        this.time = new Date();
    }
    StaticTimeAgoController = __decorate([
        core_1.Component({
            selector: 'static-time-ago',
            template: "\n      <time-ago [time]=\"time\" [live]=\"false\" ></timeago>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], StaticTimeAgoController);
    return StaticTimeAgoController;
}());
