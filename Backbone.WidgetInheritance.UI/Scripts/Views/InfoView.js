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

        },

        getDatFromServer: function (viewName) {
            console.log(++window.WI.testCount + '. ' + viewName);
            return null;
        },

        editInfo: function () {

        },
        
        deleteInfo: function () {

        }
    });

})(jQuery, window);