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

            //bind general info events here..
            _.extend(this, Backbone.Events);
            this.bindEvents();
            this.initializeChild();
        },

        //this can be overridden by child view for custom event handling..
        initializeChild: function () { },

        render: function (viewName, successCallback) {

            var data = this.getDatFromServer(viewName);
            var html = Handlebars.compile(this.template)(data);
            this.$el.html(html);
            successCallback();
        },

        events: {
            'click .btnInfoEdit': 'editInfo',
            'click .btnInfoSave': 'deleteInfo'
        },

        bindEvents: function () {

            this.on('edit', function (data) {
                this.editView();
            });

            this.on('delete', function (data) {
                this.deleteView();
            });
        },

        getDatFromServer: function (viewName) {
            console.log(++window.WI.testCount + '. ' + viewName);
            return null;
        },

        editInfo: function () {
            this.trigger("edit");
        },

        deleteInfo: function () {
            this.trigger("delete");
        },

        deleteView: function () {
            //this.$el.slideUp(1000);
            //this.$el.html('');
            this.remove();
        },

        editView: function () {
            console.log(++window.WI.testCount + '. ' + this.templatePath);
        }
    });

})(jQuery, window);