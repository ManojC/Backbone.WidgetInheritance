(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.EducationInfoView = window.WI.Views.InfoView.extend({

        //default value for element. Expected to be overridden by child view.
        el: '#educationalInfo',

        templatePath: '../Templates/EducationInfo.html',

        //this can be overridden by child view for custom event handling..
        initializeChild: function () {
            this.bindChildEvents();
        },

        _initializeChild: function () {
            this.childEvents = {
                'click input.form-control': ''
            }
            this.trigger('bindChildEvents');
        },

        getDatFromServer: function () {

        },

        _saveView: function () {
            $('.form-control', this.$el).val('');
        },

        _deleteView: function () {
            var self = this;
            this.$el.slideUp(500, function () {
                self.$el.html('');
                self.$el.slideDown();
            });
        },

        _editView: function () {

            $('.form-control', this.$el).val('educational');
        },

        _titleClick: function () {
            $('.detailsView', this.$el).unbind('slideToggle').slideToggle(500);
            this.$el.find('.titleView').toggleClass('bbn');
        },

        _fetchTemplate: function () {
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