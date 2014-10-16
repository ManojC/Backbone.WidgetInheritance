(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.AccommodationModel = window.WI.Models.ItineraryBaseModel.extend({
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

    window.WI.Collections.AccommodationoCollection = window.WI.Collections.ItineraryBaseCollection.extend({

        model: window.WI.Models.AccommodationModel,

        fetchAll: function (options) {
        }
    });

})(jQuery, window);