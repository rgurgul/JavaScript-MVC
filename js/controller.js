/**
 * Controller responds to user actions and
 * invokes changes on the model.
 */
function ListController(model, view) {
    this.model = model;
    this.view = view;
    this.view.addItem = this.addItem.bind(this);
    this.view.removeItem = this.removeItem.bind(this);
    this.view.listModified = this.updateItem.bind(this);
}

ListController.prototype = {
    addItem: function () {
        var item = window.prompt('Add item:', '');
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
    updateItem: function (index) {
        this.model.setSelectedIndex(index);
    }
};