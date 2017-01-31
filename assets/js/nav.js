App.navigation = {
  initialize: function () {
    var navTemplate, context, navHTML;
    navTemplate = Handlebars.compile($('#nav-bar').html());
    context = {};
    navHTML = navTemplate();
    $("#nav").append(navHTML);

    $('.nav a').on('click', function(event) {
      event.preventDefault();
      App.state.type = this.dataset.value;
      App.recipeHelpers.compileRecipesTemplate(App.state);
    });

    $('#date-chooser').change(function(){
      App.state.date = $(this).val();
      App.recipeHelpers.compileRecipesTemplate(App.state);
    });
  }
};
