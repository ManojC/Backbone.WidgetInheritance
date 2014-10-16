(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.TourDetailsView = Backbone.View.extend({

        el: '#headerRow',

        templateId: '#detailsView',

        template: '',

        initialize: function () {
            this.template = $(this.templateId).html();
            $('#bodyColumn').html(this.template);
        },

        render: function () { },

        events: {
            'click #btnShowGeneralInfo': 'renderArrivalView',
            'click #btnShowEducationalInfo': 'renderEducationalItineraryBaseView',
            'click #btnShowAddressInfo': 'renderActivityView'
        },

        renderArrivalView: function () {
            var self = this;
            if (!this.arrivalModel)
                this.arrivalModel = new (window.WI.Models.ArrivalModel.extend({
                    defaults: {
                        isReadOnly: true,
                        Name: '2pm airport drop ',
                        Place: 'Johannesburg',
                        Location: 'O R Tambo Airport',
                        Time: 2,
                        Vehicle: 'Bus'
                    }
                }));
            if (!this.arrivalView)
                this.arrivalView = new (window.WI.Views.ArrivalView.extend({
                    model: self.arrivalModel
                }));
            this.arrivalView.render('#arrivalView');
        },

        renderEducationalItineraryBaseView: function () {
            var self = this;
            if (!this.accommodationModel)
                this.accommodationModel = new (window.WI.Models.AccommodationModel.extend({
                    defaults: {
                        isReadOnly: true,
                        Stay: '4 Days 3 Nights',
                        Location: '234 Standton Road, Johannesburg, 321, South Africa',
                        Description: 'Hotel Address - 234 Standton Road, Johannesburg, 321, South Africa'
                    }
                }));
            if (!this.accommodationViewView)
                this.accommodationViewView = new (window.WI.Views.EducationalItineraryBaseView.extend({
                    model: self.accommodationModel
                }));
            this.accommodationViewView.render('#accommodationView');
        },

        renderActivityView: function () {
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
            if (!this.activityView)
                this.activityView = new (window.WI.Views.ActivityView.extend({
                    model: self.addressInfoModel
                }));
            this.activityView.render('#addressInfo');
        }
    });

})(jQuery, window);