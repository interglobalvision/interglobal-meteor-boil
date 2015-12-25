// Items
var itemRoutes = FlowRouter.group({
  name: 'items',
  prefix: '/items',
});

itemRoutes.route('/', {
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'items'} );
  },
});

itemRoutes.route('/:_id', {
  action: function(params) { 
    BlazeLayout.render('layout', { content: 'item'} );
  },
});

