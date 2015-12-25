/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */
Handlebars.registerHelper('pathFor', function(path, view) {
  var hashBang, query, ref;
  if (!path) {
    throw new Error('no path defined');
  }
  if (((ref = path.hash) != null ? ref.route : void 0) != null) {
    view = path;
    path = view.hash.route;
    delete view.hash.route;
  }
  query = view.hash.query ? FlowRouter._qs.parse(view.hash.query) : {};
  hashBang = view.hash.hash ? view.hash.hash : '';
  return FlowRouter.path(path, view.hash, query) + hashBang;
});

Handlebars.registerHelper('myHelper', function(myArgument){
  return "Hello, " + myArgument;
});

