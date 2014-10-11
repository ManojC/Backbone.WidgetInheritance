(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.GeneralInfoView = window.WI.Views.InfoView.extend({

        //default value for element. Expected to be overridden by child view.
        el: '#generalInfo',

        readOnlyTemplateId: '#generalInfoReadonlySection',

        editModeTemplateId: '#generalInfoEditSection',

        //this can be overridden by child view for custom event handling..
        _initializeChild: function () {
            this._bindChildEvents();
        },

        _bindChildEvents: function () {
            this.childEvents = {};
            this.trigger('bindChildEvents');
            this.on({
                'doSomething': this._doSomething
            });
        },

        getDatFromServer: function () { },

        _editView: function (e) {
            this.isReadOnly = false;
            this._fetchTemplate();
            this.render();
        },

        _saveView: function () {

            this.model.set({ 'Name': $('#txtEditName').val() });
            this.model.set({ 'Place': $('#txtEditPlace').val() });
            this.model.set({ 'Location': $('#txtEditLocation').val() });
            this.model.set({ 'Time': $('#txtEditTime').val() });
            this.model.set({ 'Vehicle': $('#txtEditVehicle').val() });

            this.isReadOnly = true;
            this._fetchTemplate();
            this.render();
        },

        _cancelView: function () {
            this.isReadOnly = true;
            this._fetchTemplate();
            this.render();
        },

        _deleteView: function (e) {
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

            if (this.isReadOnly && !this.readOnlyTemplate) {
                if (!this.readOnlyTemplateId) {
                    alert('template not found !');
                    return;
                }
                this.readOnlyTemplate = $(this.readOnlyTemplateId).html();
            }

            else {
                if (!this.readOnlyTemplateId) {
                    alert('template not found !');
                    return;
                }
                this.editModeTemplate = $(this.editModeTemplateId).html();
            }
        },

        _doSomething: function () {
            console.log('doing something!');
        }
    });

})(jQuery, window);