(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.InfoView = Backbone.View.extend({
        //default value for element. Expected to be overridden by child view.
        el: 'body',

        readOnlyTemplate: '',

        editModeTemplate: '',

        isReadOnly: true,

        initialize: function () {

            //bind events here..
            this.bindEvents();

            //add child events and extend events object
            this._initializeChild();
            _.extend(this.events, this.childEvents || {});
        },

        //child view should override this
        _initializeChild: function () { },

        render: function () {
            var html = Handlebars.compile(this.isReadOnly ? this.readOnlyTemplate : this.editModeTemplate)(this.model.toJSON());
            this.$el.html(html);
        },

        events: {
            'click .btnEditInfo': function () { this.trigger("edit"); return false; },
            'click .btnSaveInfo': function () { this.trigger("save"); return false; },
            'click .btnCancelInfo': function () { this.trigger("cancel"); return false; },
            'click .btnDeleteInfo': function () { this.trigger("delete"); return false; },
            'click .titleView': function () { this.trigger("titleClick"); return false; }
        },

        bindEvents: function () {
            //// when model is changed, change event is trigger, used for rendering
            //this.listenTo(this.model, 'change', this.render);
            //// if any error occurs while saving or fetching model, an error event is thrown
            //this.listenTo(this.model, 'error', this._handleError);
            //// when model is saved, sync event is raised
            //this.listenTo(this.model, 'sync', this._saveSuccessHandler);
            //// let view know that code is unique or not
            //this.listenTo(this.model, 'codeUnique', this._handleCodeUnique);
            
            this.on({
                'edit': this._editView,
                'save': this._saveView,
                'cancel': this._cancelView,
                'delete': this._deleteView,
                'titleClick': this._titleClick,
                'fetchTemplate': this._fetchTemplate,
                'bindChildEvents': this._baseBindChildEvents //this event should be triggered from child view.
            });

            if (this._initializeChild && typeof (this._initializeChild) == "function")
                this._initializeChild();
            this.trigger("fetchTemplate");
        },

        //event handler functions to be overridden by chikd view.
        _editView: function () { },
        _saveView: function () { },
        _cancelView: function () { },
        _deleteView: function () { },
        _titleClick: function () { },
        _fetchTemplate: function () { },

        //add all child events in 'childEvents' object and trigger 'bindChildEvents' to extend backbone events object
        _baseBindChildEvents: function () {
            _.extend(this.events, this.childEvents || {});
        },

        destroy: function () {
            this.off();
            this.stopListening();
        }
    });

})(jQuery, window);