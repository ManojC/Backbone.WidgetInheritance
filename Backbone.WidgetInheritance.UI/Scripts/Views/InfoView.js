(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.InfoView = Backbone.View.extend({
        //default value for element. Expected to be overridden by child view.
        el: 'body',

        templatePath: '',

        template: '',

        initialize: function () {

            //bind events here..
            this.bindEvents();

            //add child events and extend events object
            if (this._bindChildEvents && typeof (this._bindChildEvents) == "function")
                this._bindChildEvents();
            _.extend(this.events, this.childEvents || {});
        },

        render: function (viewName, successCallback) {
            var html = Handlebars.compile(this.template)(null);
            this.$el.html(html);
            successCallback();
        },

        events: {
            'click .btnInfoEdit': function () { this.trigger("edit"); return false; },
            'click .btnInfoDelete': function () { this.trigger("delete"); return false; },
            'click .btnSaveInfo': function () { this.trigger("save"); return false; },
            'click .titleView': function () { this.trigger("titleClick"); return false; }
        },

        bindEvents: function () {

            this.on({
                'edit': this.editView,
                'delete': this.deleteView,
                'save': this.saveView,
                'titleClick': this.titleClick,
                'fetchTemplate': this.fetchTemplate
            });

            if (this.eventListner && typeof (this.eventListner) == "function")
                this.eventListner();
            _.extend(this.events, this.childEvents || {});
            this.trigger("fetchTemplate");
        },

        //event handler functions to be overridden by chikd view.
        editView: function () { },
        deleteView: function () { },
        saveView: function () { },
        titleClick: function () { },
        fetchTemplate: function () { },

        destroy: function () {
            this.off();
            this.stopListening();
        }
    });

})(jQuery, window);