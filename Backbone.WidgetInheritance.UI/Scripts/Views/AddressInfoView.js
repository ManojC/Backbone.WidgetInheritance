﻿(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.AddressInfoView = window.WI.Views.InfoView.extend({

        //default value for element. Expected to be overridden by child view.
        el: '#addressInfo',

        templatePath: '../Templates/AddressInfo.html',

        //this can be overridden by child view for custom event handling..
        initializeChild: function () {
            this.bindChildEvents();
        },

        bindChildEvents: function () {
            console.log(++window.WI.testCount + '. overridden!');
            var that = this;
            $.ajax({
                url: this.templatePath,
                async: false,
                type: 'GET',
                success: function (template) {
                    that.template = template;
                    //that.$el.html(template);
                    console.log(++window.WI.testCount + '. callback for address info template completed!');
                }
            });
        },

        getDatFromServer: function () {

        },

        saveView: function () {
            $('.form-control', this.$el).val('');
        },

        deleteView: function () {
            this.off();
            this.$el.html('');
        },

        editView: function () {

            $('.form-control', this.$el).val('Address');
        }
    });

})(jQuery, window);