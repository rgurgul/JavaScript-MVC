/**
 * The Model. Model stores items
 */
function ListModel(items) {
    this.items = items;
    this.selectedIndex = -1;
}

ListModel.prototype = {
    getItems: function () {
        return this.items;
    },
    addItem: function (item) {
        this.items.push(item);
        this.added();
    },
    removeItemAt: function (index) {
        var item = this.items[index];
        this.items.splice(index, 1);
        this.removed(item);
        if (index === this.selectedIndex) {
            this.setSelectedIndex(-1);
        }
    },
    getSelectedIndex: function () {
        return this.selectedIndex;
    },
    setSelectedIndex: function (index) {
        this.selectedIndex = index;
    },
    added: function () {
        throw 'you must implement this method';
    },
    removed: function () {
        throw 'you must implement this method';
    }
};

