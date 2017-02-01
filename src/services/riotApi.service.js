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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var RiotApiService = (function () {
    function RiotApiService(_http) {
        this._http = _http;
        this.developerKey = 'RGAPI-EAF47474-4678-405C-A6E0-0EB899731794';
    }
    RiotApiService.prototype.getItems = function () {
        this.itemsUrl = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?itemListData=all&api_key=" + this.developerKey;
        return this._http.get(this.itemsUrl)
            .map(function (res) { return res.json(); });
    };
    RiotApiService.prototype.getItem = function (itemId) {
        this.itemUrl = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?" + itemId + "&api_key=" + this.developerKey;
        return this._http.get(this.itemUrl)
            .map(function (res) { return res.json(); });
    };
    RiotApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RiotApiService);
    return RiotApiService;
}());
exports.RiotApiService = RiotApiService;
//# sourceMappingURL=riotApi.service.js.map