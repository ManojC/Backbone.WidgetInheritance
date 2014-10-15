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
        initializeChild: function () {
            this._bindEvents();
        },

        _bindEvents: function () {
            this.on({
                'doSomething': this._doSomething
            });
        },

        getDatFromServer: function () { },

        _editView: function (e) {
            this.validateView();
            this.isReadOnly = false;
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
                this.isReadOnly = true;
                this._fetchTemplate();
                this.render();
            } else {
                //handle validation here..
            }
        },

        _cancelView: function () {
            this.validateView();
            this.isReadOnly = true;
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

            if (this.isReadOnly && !this.readOnlyTemplate) {
                this.readOnlyTemplateId ?
                    this.readOnlyTemplate = $(this.readOnlyTemplateId).html() :
                    alert('template not found !');
            }

            else {
                this.readOnlyTemplateId ?
                    this.editModeTemplate = $(this.editModeTemplateId).html() :
                    alert('template not found !');
            }
        },

        _doSomething: function () {
            console.log('doing something!');
        }
    });

})(jQuery, window);