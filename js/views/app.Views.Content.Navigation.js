var app.Views.Content.Navigation = Backbone.View.extend({
    tagName: 'li',
    className: 'nav-item',
    template: "",
    render: function() {
        var navItems = this.model.toJSON();
        this.$el.html(this.template(item));
    }
});