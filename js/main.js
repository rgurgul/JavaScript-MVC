$(function () {
    var model = new ListModel(['PHP', 'JavaScript', 'AngularJs']),
        view = new ListView(model, {
            list: $('#list'),
            btnAdd: $('#btnAdd'),
            btnDelete: $('#btnDelete')
        }),
        controller = new ListController(model, view);

    view.rebuildList();
});