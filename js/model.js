/**
 * A model stores data that is retrieved to the controller and displayed in the view.
 * Whenever there is a change to the data it is updated in the view.
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
    this.fire('itemAdded');
};

ListModel.prototype.removeItemAt = function (index) {
    this.items.splice(index, 1);
    this.fire('itemRemoved');
    this.setSelectedIndex(-1);
};

ListModel.prototype.getSelectedIndex = function () {
    return this.selectedIndex;
};

ListModel.prototype.setSelectedIndex = function (index) {
    this.selectedIndex = index;
};