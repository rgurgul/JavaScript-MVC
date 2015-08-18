/**
 * The Model. Model stores items
 */
function ListModel(items) {
    this.items = items;
    this.selectedIndex = -1;
}

ListModel.prototype = new EventTarget();

ListModel.prototype.getItems = function () {
    return this.items;
};

ListModel.prototype.addItem = function (item) {
    this.items.push(item);
    this.fire('rebuildList');
};

ListModel.prototype.removeItemAt = function (index) {
    this.items.splice(index, 1);
    this.fire('rebuildList');
    this.setSelectedIndex(-1);
};

ListModel.prototype.getSelectedIndex = function () {
    return this.selectedIndex;
};

ListModel.prototype.setSelectedIndex = function (index) {
    this.selectedIndex = index;
};