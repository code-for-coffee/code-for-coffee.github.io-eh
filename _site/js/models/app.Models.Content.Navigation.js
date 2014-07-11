var app.Models.Content.Navigation = Backbone.Model.extend({
    defaults: {
        pages = {
            name: null,
            route: null
        }
    }
});

var appPages = {
    [
        name: "Home",
        route: ""
    ], [
        name: "About",
        route: "about"
    ], [
        name: "Recommended Books",
        route: "recommended"
    ]
};

var navigationModel = new app.Models.Content.Navigation({
    model: appPages
});