Template.items.onCreated(function () {
  var template = this;
  
  // This replaces `waitOn`
  template.autorun( function() {
    template.subscribe('allItems');
  });

});

Template.items.helpers({
  ready: function() {
    return Template.instance().subscriptionsReady();
  },

  // This replaces `data`
  items: function() {
    return Items.find();
  },

  myHelper: function () {
    //
  },

});

Template.items.onRendered(function () {
  var _this = this;

});

Template.items.events({

});
