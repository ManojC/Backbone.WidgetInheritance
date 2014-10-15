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
                        isReadOnly: true,
                        Name: '2pm airport drop ',
                        Place: 'Johannesburg',
                        Location: 'O R Tambo Airport',
                        Time: 2,
                        Vehicle: 'Bus'
                    }
                }));
            if (!this.generalInfoView)
                this.generalInfoView = new (window.WI.Views.GeneralInfoView.extend({
                    model: self.generalInfoModel
                }));
            this.generalInfoView.render('#generalInfo');
        },

        renderEducationalInfoView: function () {
            var self = this;
            if (!this.educationalInfoModel)
                this.educationalInfoModel = new (window.WI.Models.EducationalInfoModel.extend({
                    defaults: {
                        isReadOnly: true,
                        Stay: '4 Days 3 Nights',
                        Location: '234 Standton Road, Johannesburg, 321, South Africa',
                        Description: 'Hotel Address - 234 Standton Road, Johannesburg, 321, South Africa'
                    }
                }));
            if (!this.educationalInfoView)
                this.educationalInfoView = new (window.WI.Views.EducationalInfoView.extend({
                    model: self.educationalInfoModel
                }));
            this.educationalInfoView.render('#educationalInfo');
        },

        renderAddressInfoView: function () {
            var self = this;
            if (!this.addressInfoModel)
                this.addressInfoModel = new (window.WI.Models.AddressInfoModel.extend({
                    defaults: {
                        isReadOnly: true,
                        Stay: '4 Days 3 Nights',
                        Location: '234 Standton Road, Johannesburg, 321, South Africa',
                        Description: 'Hotel Address - 234 Standton Road, Johannesburg, 321, South Africa'
                    }
                }));
            if (!this.addressInfoView)
                this.addressInfoView = new (window.WI.Views.AddressInfoView.extend({
                    model: self.addressInfoModel
                }));
            this.addressInfoView.render('#addressInfo');
        }
    });

})(jQuery, window);