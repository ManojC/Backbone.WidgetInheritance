(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.GeneralInfoModel = window.WI.Models.InfoModel.extend({
        isValid: false,
        fetch: function () { },

        save: function () {
            this.validate();
            if (this.isValid)
                console.log('data validated.. ready to be sent to server');
        },

        create: function () { },

        update: function () { },

        validate: function () {
            if (isNaN(this.get('Time'))) {
                this.isValid = false;
                this.trigger('invalid', [false, 'not a number']);
            }
            else
                this.isValid = true;
        }
    });

    window.WI = window.WI || {};
    window.WI.Collections = window.WI.Collections || {};

    window.WI.Collections.GeneralInfoCollection = window.WI.Collections.InfoCollection.extend({

        model: window.WI.Models.GeneralInfoModel,

        fetchAll: function (options) {
        }
    });

})(jQuery, window);