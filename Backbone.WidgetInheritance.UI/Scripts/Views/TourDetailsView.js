(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.TourDetailsView = Backbone.View.extend({

        el: '#applicationContainer',

        templateId: '#detailsView',

        template: '',

        initialize: function () {
        },

        render: function (container) {
            this.el = container;
            this.template = $(this.templateId).html();
            this.$el.html(this.template);
        },

        events: {
            'click #btnShowGeneralInfo': 'renderArrivalView',
            'click #btnShowEducationalInfo': 'renderAccommodationView',
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

        renderAccommodationView: function () {
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
            if (!this.accommodationView)
                this.accommodationView = new (window.WI.Views.AccommodationView.extend({
                    model: self.accommodationModel
                }));
            this.accommodationView.render('#accommodationView');
        },

        renderActivityView: function () {
            var self = this;
            if (!this.activityModel)
                this.activityModel = new (window.WI.Models.ActivityModel.extend({
                    defaults: {
                        isReadOnly: true,
                        Day: '1-3',
                        Time: '6.30 pm',
                        Type: 'Hunting',
                        Location: '234 Standton Road, Johannesburg, 321, South Africa',
                        Description: 'Hotel Address - 234 Standton Road, Johannesburg, 321, South Africa'
                    }
                }));
            if (!this.activityView)
                this.activityView = new (window.WI.Views.ActivityView.extend({
                    model: self.activityModel
                }));
            this.activityView.render('#activityView');
        }
    });

})(jQuery, window);