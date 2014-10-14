var app.router = new(Backbone.Router.extend({
    routes: {
        "about": "showAbout",
        "contact": "showContact",
        "recommended": "showRecommended"
        "": "index"
    },

    initialize: function(options) {

    },

    start: function() {
        Backbone.history.start({
            pushState: true
        });
    },

    index: function() {

    },

    showAbout: function() {

    },

    showRecommended: function() {

    },

    showContact: function() {

    },


}));