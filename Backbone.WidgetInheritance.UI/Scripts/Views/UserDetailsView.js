(function($, window, undefined) {

    window.WI = window.WI || {};
    window.WI.Views = window.WI.Views || {};

    //base info view definition
    window.WI.Views.DetailsView = Backbone.View.extend({

        el: '#bodyColumn',

        templatePath: '/Templates/details.html',

        template: '',

        initialize: function () {
            var that = this;
            $.get(this.templatePath, function (template) {
                that.template = template;
                console.log(template);
            });
        },

        render: function () {

            this.renderGeneralInfoView();
            this.renderGeneralInfoView();
            this.renderGeneralInfoView();

        },

        events: {

        },

        getDatFromServer: function () {

        }
    });

})(jQuery, window);