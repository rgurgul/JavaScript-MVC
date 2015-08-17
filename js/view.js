/**
 * View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interraction.
 */
function ListView(model, els) {
    this.model = model;
    this.els = els;

    // attach model listeners
    this.model.added = this.rebuildList.bind(this);
    this.model.removed = this.rebuildList.bind(this);

    // attach listeners to HTML controls
    this.els.list.change(function (e) {
        this.listModified(e.target.selectedIndex);
    }.bind(this));
    this.els.btnAdd.click(function () {
        this.btnAddClicked();
    }.bind(this));
    this.els.btnDelete.click(function () {
        this.btnDeleteClicked();
    }.bind(this));
}

ListView.prototype = {
    listModified: function () {
        throw "you should implement this method";
    },
    btnAddClicked: function () {
        throw "you should implement this method";
    },
    btnDeleteClicked: function () {
        throw "you should implement this method";
    },
    rebuildList: function () {
        var list = this.els.list;
        list.html('');

        var items = this.model.getItems();
        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                list.append($('<option>' + items[key] + '</option>'));
            }
        }
    }
};