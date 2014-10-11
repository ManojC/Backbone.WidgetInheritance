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

        render: function () { },

        events: {
            'click #btnShowGeneralInfo': 'renderGeneralInfoView',
            'click #btnShowEducationalInfo': 'renderEducationalInfoView',
            'click #btnShowAddressInfo': 'renderAddressInfoView'
        },

        renderGeneralInfoView: function () {
            var self = this;
            if (!this.generalInfoModel)
                this.generalInfoModel = new (window.WI.Models.GeneralInfoModel.extend({
                    defaults: {
                        Name: '2pm airport drop ',
                        Place: 'Johannesburg',
                        Location: 'O R Tambo Airport',
                        Time: '2 PM',
                        Vehicle: 'Bus'
                    }
                }));
            if (!this.generalInfoView)
                this.generalInfoView = new (window.WI.Views.GeneralInfoView.extend({
                    isReadOnly: true,
                    model: self.generalInfoModel
                }));
            this.generalInfoView.render();
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