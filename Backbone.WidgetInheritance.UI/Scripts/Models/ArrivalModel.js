﻿(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.ArrivalModel = window.WI.Models.ItineraryBaseModel.extend({
        isValid: false,
        fetch: function () { },

        save: function () {
            this.validate();
        },

        create: function () { },

        update: function () { },

        //this function is called for every model update
        validate: function () {
            if (isNaN(this.get('Time'))) {
                //restore model if validation fails
                this.attributes = this.previousAttributes();
                this.isValid = false;
                this.trigger('invalid', [false, 'not a number']);
            }
            else this.isValid = true;
        }
    });

    window.WI = window.WI || {};
    window.WI.Collections = window.WI.Collections || {};

    window.WI.Collections.ArrivalCollection = window.WI.Collections.ItineraryBaseCollection.extend({

        model: window.WI.Models.ArrivalModel,

        fetchAll: function (options) {
        }
    });

})(jQuery, window);