/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Filters

var filters = {

  isLoggedIn: function(context, redirect) {
    debugger;
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.');
      this.stop();
    }
    this.next();
  },

};

FlowRouter.triggers.enter([filters.isLoggedIn], { only: ['allItems'] });


// Pages
FlowRouter.route('/', {
  name: 'homepage',
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'homepage' } );
  },
});

FlowRouter.route('/content', {
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'content'} );
  },
});

// Users
FlowRouter.route('/login', {
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'login'} );
  },
});

FlowRouter.route('/signup', {
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'signup'} );
  },
});

FlowRouter.route('/forgot', {
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'forgot'} );
  },
});

// Config
/*
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});



// Routes

Router.map(function() {

  // Boiler admin

  this.route('admin', {
    path: '/admin',
    onBeforeAction: function() {
      var userId = Meteor.userId();

      if (Roles.userIsInRole(userId, 'admin')) {
        this.next();
      } else {
        Router.go('/');
      }
    },

    waitOn: function() {
      return [
        Meteor.subscribe('items'),
      ];
    },

    data: function() {
      return {
        items: Items.find(),
      };
    },
  });

});

*/
