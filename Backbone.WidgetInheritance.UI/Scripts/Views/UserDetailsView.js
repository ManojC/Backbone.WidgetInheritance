(function ($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.DetailsView = Backbone.View.extend({

        el: '#headerRow',

        templatePath: '../Templates/Details.html',

        template: '',

        initialize: function () {
            var that = this;
            $.ajax({
                url: this.templatePath,
                async: false,
                type: 'GET',
                success: function (template) {
                    that.template = template;
                    $('#bodyColumn').html(template);
                    console.log(++window.WI.testCount + '. callback for details view template completed!');
                }
            });
        },

        render: function () {

        },

        events: {
            'click #btnShowGeneralInfo': 'renderGeneralInfoView',
            'click #btnShowEducationalInfo': 'renderEducationalInfoView',
            'click #btnShowAddressInfo': 'renderAddressInfoView'
        },

        renderGeneralInfoView: function () {
            var generalInfoView = new window.WI.Views.GeneralInfoView();
            generalInfoView.render('GeneralInfoView', function () {
                console.log(++window.WI.testCount + '. success callback for general info render');
            });
        },

        renderEducationalInfoView: function () {
            var educationInfoView = new window.WI.Views.EducationInfoView();
            educationInfoView.render('EducationInfoView', function () {
                console.log(++window.WI.testCount + '. success callback for educational info render');
            });
        },

        renderAddressInfoView: function () {
            var addressInfoView = new window.WI.Views.AddressInfoView();
            addressInfoView.render('AddressInfoView', function () {
                console.log(++window.WI.testCount + '. success callback for address info render');
            });
        }
    });

})(jQuery, window);