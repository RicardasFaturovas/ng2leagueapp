"use strict";
var Item = (function () {
    function Item(id, name, gold, description, image, tags, stats) {
        this.id = id;
        this.name = name;
        this.gold = gold;
        this.description = description;
        this.image = image;
        this.tags = tags;
        this.stats = stats;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.class.js.map