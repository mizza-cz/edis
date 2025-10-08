$(".js-select")
  .select2({
    width: "100%",
    minimumResultsForSearch: -1,
    placeholder: "Vyberte",
  })
  .on("change", (e) => $(e.currentTarget).closest("form").submit());
