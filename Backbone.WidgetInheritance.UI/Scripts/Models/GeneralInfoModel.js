(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Models = window.WI.Models || {};

    //base info view definition
    window.WI.Models.GeneralInfoModel = window.WI.Models.InfoModel.extend({

        // stores reference of the server tour object
        sTour: null,

        fetch: function () { },

        create: function () { },

        update: function () { },

        getCompanyIdCode: function (code) { },

        _updateTourDetails: function () { },

        //check code is unique 
        isCodeUnique: function (code) { },

        //common method which checks code is unique 
        _isCodeUnique: function (code, onSuccess, onError) { },

        // creates a cName
        _createCName: function (displayName, onSuccess, onError) { },

        // triggers error event on the model
        _triggerError: function (error) { },

        // let view know that if code is unique or not
        _triggerUniqueCode: function (isUnique) { }
    });

    window.WI = window.WI || {};
    window.WI.Collections = window.WI.Collections || {};
    
    window.WI.Collections.GeneralInfoCollection = window.WI.Collections.InfoCollection.extend({
        
        model: window.WI.Models.GeneralInfoModel,

        fetchAll: function (options) {
        },

        // gets the company info for the given set of ids
        _fetchCompanyByIds: function (ids, options) {
        },

        // when company information is retrieved, merge it with tour
        _mergeCollection: function (companyCollection) {
        },
    });

})(jQuery, window);