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

        destroy: function () {
            this.off();
            this.stopListening();
        },

        bindEvents: function () {
            if (this.eventListner && typeof (this.eventListner) == "function") {
                this.eventListner();
                this.trigger("fetchTemplate");
            }
        },

        titleClick: function () {
            $('.detailsView', this.$el).unbind('slideToggle').slideToggle(500);
            this.$el.find('.titleView').toggleClass('bbn');
        }
    });

})(jQuery, window);