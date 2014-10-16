(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.ItineraryBaseView = Backbone.View.extend({
        //default value for element. Expected to be overridden in render function.
        el: 'body',

        template: '',

        initialize: function () {

            //bind events here..
            this._bindEvents();
            //add child events and extend events object
            this.initializeChild();
        },

        //child view should override this
        initializeChild: function () { },

        render: function (container) {
            this.renderChild(container);
        },

        renderChild: function (container) { },

        events: {
            'click .btnEditInfo': function () { this.trigger("edit"); return false; },
            'click .btnSaveInfo': function () { this.trigger("save"); return false; },
            'click .btnCancelInfo': function () { this.trigger("cancel"); return false; },
            'click .btnDeleteInfo': function () { this.trigger("delete"); return false; },
            'click .titleView': function () { this.trigger("titleClick"); return false; }
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

            this.on({
                'edit': this._editView,
                'save': this._saveView,
                'cancel': this._cancelView,
                'delete': this._deleteView,
                'titleClick': this._titleClick,
                'fetchTemplate': this._fetchTemplate
            });
            this.trigger("fetchTemplate");
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