/* ---------------------------------------------------- +/

## Item ##

Code related to the item template

/+ ---------------------------------------------------- */

Template.item.helpers({

  myHelper: function () {
    //
  },

});

Template.item.onCreated(function () {
  var _this = this;

});

Template.item.onRendered(function () {
  var _this = this;

});

Template.item.events({

  'click .delete': function(e, instance) {
    var _this = this;

    e.preventDefault();
    Meteor.call('removeItem', _this, function(error, result) {
      alert('Item deleted.');
      Router.go('/items');
    });
  },

});