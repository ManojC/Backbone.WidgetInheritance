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

        eventListner: function () {
            this.childEvents = {
                'click input.form-control':''
            }
        },

        saveView: function () {
            $('.form-control', this.$el).val('');
        },

        deleteView: function (e) {
            var self = this;
            this.$el.slideUp(500, function () {
                self.$el.html('');
                self.$el.show();
            });
        },

        editView: function (e) {

            $('.form-control', this.$el).val('general');
        },

        titleClick: function () {
            $('.detailsView', this.$el).unbind('slideToggle').slideToggle(500);
            this.$el.find('.titleView').toggleClass('bbn');
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