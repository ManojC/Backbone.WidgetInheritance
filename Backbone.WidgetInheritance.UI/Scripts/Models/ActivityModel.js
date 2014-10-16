(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.ActivityModel = window.WI.Models.ItineraryBaseModel.extend({
        isValid: false,
        fetch: function () { },

        save: function () {
            this.validate();
        },

        create: function () { },

        update: function () { },

        //this function is called for every model update
        validate: function () {
            this.isValid = true;
        }
    });

    window.WI = window.WI || {};
    window.WI.Collections = window.WI.Collections || {};

    window.WI.Collections.ActivityCollection = window.WI.Collections.ItineraryBaseCollection.extend({

        model: window.WI.Models.ActivityModel,

        fetchAll: function (options) {
        }
    });

})(jQuery, window);