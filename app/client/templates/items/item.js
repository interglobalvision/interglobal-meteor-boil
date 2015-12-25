/* ---------------------------------------------------- +/

## Item ##

Code related to the item template

/+ ---------------------------------------------------- */

Template.item.onCreated(function () {
  var template = this;
  
  // This replaces `waitOn`
  template.autorun( function() {
    template.subscribe('singleItem', FlowRouter.getParam('_id'));
  });

});


Template.item.helpers({
  ready: function() {
    return Template.instance().subscriptionsReady();
  },

  // This replaces `data`
  item: function() {
    return Items.findOne(FlowRouter.getParam('_id'));
  },

  myHelper: function () {
    //
  },

});

Template.item.onRendered(function () {
  var _this = this;

});

Template.item.events({

  'click .delete': function(e, instance){
    var _this = this;

    e.preventDefault();

    Meteor.call('removeItem', _this, function(error, result) {
      alert('Item deleted.');
      FlowRouter.go('/items');
    });
  },

});
