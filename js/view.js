/**
 * View presents the model and provides
 * the UI events. The controller listens these
 * events to handle the user interaction.
 */
function ListView(model, els) {
    this.model = model;
    this.els = els;

    // add model listeners
    this.model.addListener('itemAdded', this.rebuildList.bind(this));
    this.model.addListener('itemRemoved', this.rebuildList.bind(this));

    // add listeners to HTML controls
    this.els.list.change(function (e) {
        this.fire({type: "updateItem", index: e.target.selectedIndex});
    }.bind(this));
    this.els.btnAdd.click(function () {
        this.fire("addItem");
    }.bind(this));
    this.els.btnDelete.click(function () {
        this.fire("removeItem");
    }.bind(this));
}

ListView.prototype = new EventTarget();

ListView.prototype.rebuildList = function () {
    var list = this.els.list;
    list.html('');

    var items = this.model.getItems();
    for (var key in items) {
        if (items.hasOwnProperty(key)) {
            list.append($('<option>' + items[key] + '</option>'));
        }
    }
};