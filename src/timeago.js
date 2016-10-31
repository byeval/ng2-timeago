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
var lang_1 = require('@angular/core/src/facade/lang');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var TimeAgo = (function () {
    function TimeAgo() {
        this.live = true;
        this.interval = 60 * 1000;
        this.maxPeriod = 365 * 24 * 60 * 60 * 1000;
        this.afterMaxDateFormat = 'medium';
        this.suffix = 'ago';
    }
    TimeAgo.prototype.transform = function (val) {
        var _this = this;
        this.timeago = this.getTimeAgo(val);
        if (this.live) {
            this.timer = setInterval(function () {
                _this.timeago = _this.getTimeAgo(val);
            }, this.interval);
        }
    };
    TimeAgo.prototype.getTimeAgo = function (val) {
        var diff = new Date().getTime() - new Date(val).getTime();
        if (diff > this.maxPeriod) {
            core_1.LOCALE_ID.toString;
            var datePipe = new common_1.DatePipe(core_1.LOCALE_ID.toString());
            return datePipe.transform(val, this.afterMaxDateFormat);
        }
        var period = {
            second: 1000,
            minute: 60 * 1000,
            hour: 60 * 60 * 1000,
            day: 24 * 60 * 60 * 1000,
            week: 7 * 24 * 60 * 1000 * 60,
            month: 30 * 24 * 60 * 1000 * 60,
            year: 365 * 24 * 60 * 1000 * 60
        }, i, j;
        for (i in period) {
            if (diff < period[i]) {
                return this.makeupStr(j || 'second', Math.round(diff / (period[j] || 1000)));
            }
            j = i;
        }
        return this.makeupStr(i, Math.round(diff / period[i]));
    };
    TimeAgo.prototype.makeupStr = function (unit, n) {
        return n + ' ' + unit + (n != 1 ? 's' : '') + ' ' + this.suffix;
    };
    TimeAgo.prototype.supports = function (obj) {
        return lang_1.isDate(obj) || lang_1.NumberWrapper.isNumeric(obj);
    };
    TimeAgo.prototype.ngOnInit = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
        if (lang_1.isBlank(this.time)) {
            console.warn("time property is required.");
        }
        else if (!this.supports(this.time)) {
            console.error(this.time + " isn't valid date format.");
        }
        else {
            this.transform(this.time);
        }
    };
    TimeAgo.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], TimeAgo.prototype, "time", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TimeAgo.prototype, "live", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TimeAgo.prototype, "interval", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TimeAgo.prototype, "maxPeriod", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TimeAgo.prototype, "afterMaxDateFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TimeAgo.prototype, "suffix", void 0);
    TimeAgo = __decorate([
        core_1.Component({
            selector: 'time-ago',
            template: "{{timeago}}"
        }), 
        __metadata('design:paramtypes', [])
    ], TimeAgo);
    return TimeAgo;
}());
exports.TimeAgo = TimeAgo;
