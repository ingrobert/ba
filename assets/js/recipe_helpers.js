App.recipeHelpers = {
  compileRecipesTemplate: function compileRecipesTemplate(state) {
    var recipesTemplate, recipes, context, recipesHTML;
    recipesTemplate = Handlebars.compile($('#recipe-template').html());

    $.getJSON('/api/recipes/'+ state.type + '/' + state.date, function(resp, a, b) {
      recipes = resp[state.type + '_plan'].recipes;
      context = {recipes};
      recipesHTML = recipesTemplate(context);
      $("#recipes").replaceWith(recipesHTML);
    });
  }
};
