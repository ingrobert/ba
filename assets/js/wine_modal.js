App.wineModal = {
  initialize: function() {
    var wine, wineTemplate, context, wineHTML;
    $(document).on('click', '.view-wine-pairing', function() {
      $.getJSON('/api/product_pairings/' + this.dataset.wine, function(resp, a, b) {

        App.state.product_pairings = resp.product_pairings[0].paired_product.producible.wine;

        wine = App.state.product_pairings;
        wineTemplate = Handlebars.compile($('#wine-template').html());

        context = {
          name: wine.name,
          varietals_name: wine.varietals.map(function(varietal) {
            return varietal.name;
          }).join(', '),
          year: wine.year,
          description: wine.description,
          fun_facts: wine.fun_facts,
          image_url: wine.bottle_image_url,
        };

        wineHTML = wineTemplate(context);
        $('#wine-description').replaceWith(wineHTML);
        $('#wine-modal').modal('toggle');
      });
    });
  }
};
