var coffeebeanBlog = Backbone.View.extend({
    Models: {},
    Views: {},
    Collections: {},
    Controllers: {},
    events: {
        'click a': function(evt) {
            e.preventDefault();
            Backbone.history.navigate(evt.target.pathname, {
                trigger: true
            });
        }
    },
    start: function() {
        Backbone.history.start({
            pushState: true
        });
    }
})
var app = new coffeebeanBlog({
    el: document.body
});

var app.Controllers.init = function() {

};