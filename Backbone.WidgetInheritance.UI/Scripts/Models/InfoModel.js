(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.InfoModel = Backbone.Models.extend({
        
        defaults: {
            "Username": "",
            "Email": "",
            "AccountId": ""
        },
        

        
    });

})(jQuery, window);