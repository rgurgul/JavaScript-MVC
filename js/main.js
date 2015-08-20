$(function () {
    var model = new ListModel(['JavaScript', 'AngularJs', 'Bootstrap']),
        view = new ListView(model, {
            list: $('.list'),
            btnAdd: $('.btn-add'),
            btnDelete: $('.btn-delete')
        }),
        controller = new ListController(model, view);

    view.rebuildList();
});