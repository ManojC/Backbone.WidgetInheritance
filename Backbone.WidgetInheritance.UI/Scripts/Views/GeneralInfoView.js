(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.GeneralInfoView = window.WI.Views.InfoView.extend({

        //default value for element. Expected to be overridden by child view.
        el: '#generalInfo',

        templatePath: '../Templates/GeneralInfo.html',

        //this can be overridden by child view for custom event handling..
        initializeChild: function () {
            this.bindChildEvents();
        },

        eventListner: function() {
            this.stopListening();
            this.listenTo(this, 'edit', this.editView);
            this.listenTo(this, 'delete', this.deleteView);
            this.listenTo(this, 'save', this.saveView);
            this.listenTo(this, 'titleClick', this.titleClick);
            this.listenTo(this, 'fetchTemplate', this.fetchTemplate);
        },

        saveView: function () {
            $('.form-control', this.$el).val('');
        },

        deleteView: function (e) {
            this.$el.html('');
        },

        editView: function (e) {

            $('.form-control', this.$el).val('general');
        },

        fetchTemplate: function () {
            console.log(++window.WI.testCount + '. overridden!');
            var that = this;
            $.ajax({
                url: this.templatePath,
                async: false,
                type: 'GET',
                success: function (template) {
                    that.template = template;
                    //that.$el.html(template);
                    console.log(++window.WI.testCount + '. callback for general info template completed!');
                }
            });
        }
    });

})(jQuery, window);