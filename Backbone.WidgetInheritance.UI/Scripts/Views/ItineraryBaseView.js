(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.ItineraryBaseView = Backbone.View.extend({

        template: '',

        initialize: function () {

            //bind events here..
            this._bindEvents();
            //add child events and extend events object
            this.initializeChild();
        },

        //child view should override this
        initializeChild: function () { },

        render: function () {
            if (!(this.$el && this.$el[0].id))
                throw "element not provided";

            this.renderChild();
        },

        renderChild: function (container) { },

        events: {
            'click .btnEditInfo': function () { this._editView(); return false; },
            'click .btnSaveInfo': function () { this._saveView(); return false; },
            'click .btnCancelInfo': function () { this._cancelView(); return false; },
            'click .btnDeleteInfo': function () { this._deleteView(); return false; },
            'click .titleView': function () { this._titleClick(); return false; }
        },

        //to be oberridden by child view
        childEvents: {},

        _bindChildEvents: function () { },

        _bindEvents: function () {
            //extend events object with child events.
            this._bindChildEvents();
            _.extend(this.events, this.childEvents);

            // let view know that model is invalid
            this.listenTo(this.model, 'invalid', this.validateView);
            this._fetchTemplate();
        },

        //event handler functions to be overridden by chikd view.
        _editView: function () { },
        _saveView: function () { },
        _cancelView: function () { },
        _deleteView: function () { },
        _titleClick: function () { },
        _fetchTemplate: function () { },

        //this function will be triggered by 'invalid' event bound on model
        //args will be the array sent after triggering the event from model itself
        validateView: function (args) {
            if (args === undefined) {
                $('#messageViewContainer').html('');
                this.$el.removeClass('validView').removeClass('invalidView');
            }
            else if (args[0] === true) {
                $('#messageViewContainer').html('<div class="alert alert-success" role="alert">Success!</div>');
                this.$el.removeClass('invalidView').addClass('validView');
            } else if (args[0] === false) {
                $('#messageViewContainer').html('<div class="alert alert-danger" role="alert">' + args[1] + '</div>');
                this.$el.removeClass('validView').addClass('invalidView');
            }
        },

        destroy: function () {
            this.off();
            this.stopListening();
        }
    });

})(jQuery, window);