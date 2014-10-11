(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.DetailsView = Backbone.View.extend({

        el: '#headerRow',

        templateId: '#detailsView',

        template: '',

        initialize: function () {
            this.template = $(this.templateId).html();
            $('#bodyColumn').html(this.template);
        },

        render: function () {

        },

        events: {
            'click #btnShowGeneralInfo': 'renderGeneralInfoView',
            'click #btnShowEducationalInfo': 'renderEducationalInfoView',
            'click #btnShowAddressInfo': 'renderAddressInfoView'
        },

        renderGeneralInfoView: function () {
            if (!this.generalInfoView)
                this.generalInfoView = new window.WI.Views.GeneralInfoView();
            this.generalInfoView.render('GeneralInfoView', function () {
                console.log(++window.WI.testCount + '. success callback for general info render');
            });
        },

        renderEducationalInfoView: function () {
            if (!this.educationInfoView)
                this.educationInfoView = new window.WI.Views.EducationInfoView();
            this.educationInfoView.render('EducationInfoView', function () {
                console.log(++window.WI.testCount + '. success callback for educational info render');
            });
        },

        renderAddressInfoView: function () {
            if (!this.addressInfoView)
                this.addressInfoView = new window.WI.Views.AddressInfoView();
            this.addressInfoView.render('AddressInfoView', function () {
                console.log(++window.WI.testCount + '. success callback for address info render');
            });
        }
    });

})(jQuery, window);