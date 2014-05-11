var app.Models.Content.Social = Backbone.Model.extend({
    defaults: {
        links = {
            name: null,
            uri: null
        }
    }
});

var appSocialLinks = {
    [
        name: "Twitter",
        uri: "https://twitter.com/code4coffee"
    ], [
        name: "Github",
        route: "https://github.com/code-for-coffee"
    ]
};

var socialLinksModel = new app.Models.Content.Social({
    model: appSocialLinks
});