(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.InfoModel = Backbone.Model.extend({

        fetch: function () { },

        //save: function () {
        //},

        validate: function (attributes, options) {

        },

        create: function () { },

        update: function () { }
    });

    window.WI = window.WI || {};
    window.WI.Collections = window.WI.Collections || {};

    window.WI.Collections.InfoCollection = Backbone.Collection.extend({
        model: window.WI.Models.InfoModel,

        fetchAll: function (options) {
        }
    });

})(jQuery, window);