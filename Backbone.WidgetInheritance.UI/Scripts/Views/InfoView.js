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
            this.initializeChild();
        },

        //this can be overridden by child view for custom event handling..
        initializeChild: function () {
        },

        render: function (viewName, successCallback) {

            var data = this.getDatFromServer(viewName);
            var html = Handlebars.compile(this.template)(data);
            this.$el.html(html);
            successCallback();
        },

        events: {
            'click .btnInfoEdit': 'triggerEdit',
            'click .btnInfoSave': 'triggerDelete',
            'click .btnSaveInfo': 'triggerSave',
            'click .titleView': 'triggerSlide'
        },

        bindEvents: function () {

            _.extend(this, Backbone.Events);

            this.on('edit');
            this.on('delete');
            this.on('save');
            this.on('titleClick');

            this.listenTo(this, 'edit', this.editView);
            this.listenTo(this, 'delete', this.deleteView);
            this.listenTo(this, 'save', this.saveView);
            this.listenTo(this, 'titleClick', this.titleClick);
        },

        getDatFromServer: function (viewName) {
            console.log(++window.WI.testCount + '. ' + viewName);
            return null;
        },

        triggerEdit: function () {
            this.trigger("edit");
            return false;
        },

        triggerDelete: function () {
            this.trigger("delete");
            return false;
        },

        triggerSave: function () {
            this.trigger("save");
            return false;
        },

        triggerSlide: function () {
            this.trigger("titleClick");
            return false;
        },

        titleClick: function () {
            $('.detailsView', this.$el).slideToggle(500);
            this.$el.find('.titleView').toggleClass('bbn');
        }
    });

})(jQuery, window);