/**
 * Controller responds to user actions and
 * invokes changes on the model.
 */
function ListController(model, view) {
    this.model = model;
    this.view = view;
    this.view.addListener("addItem", this.addItem.bind(this));
    this.view.addListener("removeItem", this.removeItem.bind(this));
    this.view.addListener("updateItem", this.updateItem.bind(this));
}

ListController.prototype = {
    addItem: function () {
        var item = window.prompt('New item:', '');
        if (item) {
            this.model.addItem(item);
        }
    },
    removeItem: function () {
        var index = this.model.getSelectedIndex();
        if (index !== -1) {
            this.model.removeItemAt(this.model.getSelectedIndex());
        }
    },
    updateItem: function (evt) {
        this.model.setSelectedIndex(evt.index);
    }
};