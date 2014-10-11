(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.AddressInfoView = window.WI.Views.InfoView.extend({

        //default value for element. Expected to be overridden by child view.
        el: '#addressInfo',

        templateId: '#addressInfoSection',

        //this can be overridden by child view for custom event handling..
        _initializeChild: function () {
            this._bindChildEvents();
        },

        _bindChildEvents: function () {
            this.childEvents = {
                'click input.form-control': '_titleClick'
            };
            this.trigger('bindChildEvents');
            this.on({
                'doSomething': this._doSomething
            });
        },

        getDatFromServer: function () { },

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
            $('.form-control', this.$el).val('Address');
        },

        _titleClick: function () {
            $('.detailsView', this.$el).unbind('slideToggle').slideToggle(500);
            this.$el.find('.titleView').toggleClass('bbn');
        },

        _fetchTemplate: function () {
            this.template = $(this.templateId).html();
        },

        _doSomething: function () {
            console.log('doing something!');
        }
    });

})(jQuery, window);