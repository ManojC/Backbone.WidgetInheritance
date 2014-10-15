(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.GeneralInfoView = window.WI.Views.InfoView.extend({

        //default value for element. Expected to be overridden in render function.
        el: '#generalInfo',

        templateId: '#generalInfoSection',

        //this can be overridden by child view for custom event handling..
        initializeChild: function () {
        },

        renderChild: function (container) {
            this.el = container;
            var html = Handlebars.compile(this.template)(this.model.toJSON());
            this.$el.html(html);
        },

        childEvents: {
            'focusout input:text': '_trim'
        },

        _bindChildEvents: function () {
            this.on({
                'doSomething': this._doSomething
            });
        },

        getDatFromServer: function () { },

        _editView: function (e) {
            this.validateView();
            this.model.set({ 'isReadOnly': false });
            this._fetchTemplate();
            this.render();
        },

        _saveView: function () {

            this.model.set({
                'Name': $('#txtEditName').val(),
                'Place': $('#txtEditPlace').val(),
                'Location': $('#txtEditLocation').val(),
                'Time': $('#txtEditTime').val(),
                'Vehicle': $('#txtEditVehicle').val()
            });

            this.model.save();

            if (this.model.isValid) {
                this.validateView();
                this.model.set({ 'isReadOnly': true });
                this._fetchTemplate();
                this.render();
            } else {
                //handle UI validation here..
            }
        },

        _cancelView: function () {
            this.validateView();
            this.model.set({ 'isReadOnly': true });
            this._fetchTemplate();
            this.render();
        },

        _deleteView: function (e) {
            this.validateView();
            var self = this;
            this.$el.slideUp(500, function () {
                self.$el.empty().show();
                //self.$el.show();
            });
        },

        _titleClick: function () {
            this.$el.find('.titleView').toggleClass('bbn').siblings().slideToggle(500);
        },

        _fetchTemplate: function () {
            if (this.templateId) {
                if (!this.template)
                    this.template = $(this.templateId).html();
            } else
                alert('template not found !');
        },

        _doSomething: function () {
            console.log('doing something!');
        },

        _trim: function (e) {
            $('#' + e.currentTarget.id).val($('#' + e.currentTarget.id).val().trim());
        }
    });

})(jQuery, window);