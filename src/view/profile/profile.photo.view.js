var app = app || {};
var Backbone = Backbone || {};

/**
 * ProfilePhoto component
 */
app.profilePhotoView = Backbone.View.extend({
  el: '.container',
  resultData: false,
  initialize: function (params) {
    this.params = params;
  },
  render: function () {
    var data = this.resultData;
    console.log("RENDER_ABOUT_COMPONENT");
    var stringResult = JSON.stringify(data);
    $('.profileContainerData').html("<h3>" + stringResult +"</h3>");
  },
  fetchData: function () {
    var self = this;
    return this.fetchAboutData().then(function (result) {
      self.resultData = result;
      return result;
    });
  },
  fetchAboutData: function () {
    var dfd = jQuery.Deferred();
    setTimeout(function () {
      dfd.resolve({
        about1: 'about123',
        about2: 'dsada',
        about3: '31231'
      });
    }, 300);
    return dfd.promise();
  }
});
