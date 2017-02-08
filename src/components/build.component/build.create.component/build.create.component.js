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
var riotApi_service_1 = require("../../../services/riotApi.service");
require('rxjs/Rx');
var item_class_1 = require("../../../classes/item.class");
var item_modal_component_1 = require("../item.modal.component/item.modal.component");
var BuildCreateComponent = (function () {
    function BuildCreateComponent(_riotApiService) {
        this._riotApiService = _riotApiService;
        this.itemSlots = Array(6).fill(null);
        this.imageLink = "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/item/";
    }
    BuildCreateComponent.prototype.addItem = function (item, slotNumber) {
        this.itemSlots[slotNumber] = item;
        console.log(this.itemSlots);
    };
    BuildCreateComponent.prototype.removeItem = function (slotNumber) {
        this.itemSlots[slotNumber] = null;
    };
    // formats the items json to display properly
    BuildCreateComponent.prototype.formatItems = function (items) {
        var _this = this;
        return Object.keys(items)
            .map(function (key) { return items[key]; })
            .map(function (item) { return new item_class_1.Item(item.id, item.name, item.gold.total, item.plaintext, "" + _this.imageLink + item.id + ".png", item.tags, Object.keys(item.stats).map(function (key) {
            return {
                "statName": key,
                "statAmount": item.stats[key]
            };
        })); });
    };
    BuildCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._riotApiService.getItems()
            .map(function (el) { return el.data; })
            .subscribe(function (items) {
            _this.items = _this.formatItems(items);
            console.log(_this.items);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.ViewChild(item_modal_component_1.ItemModalComponent), 
        __metadata('design:type', item_modal_component_1.ItemModalComponent)
    ], BuildCreateComponent.prototype, "modal", void 0);
    BuildCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'build-create',
            templateUrl: 'build.create.component.html',
        }), 
        __metadata('design:paramtypes', [riotApi_service_1.RiotApiService])
    ], BuildCreateComponent);
    return BuildCreateComponent;
}());
exports.BuildCreateComponent = BuildCreateComponent;
//# sourceMappingURL=build.create.component.js.map