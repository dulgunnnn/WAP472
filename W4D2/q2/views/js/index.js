$(() => {
  const noSuccess = () => {
    $("#question").val("error");
  };

  $("#ask8ball").submit((e) => {
    $.get("/8ball", {})
      .done((ans) => {
        $("#question").val(ans);
      })
      .fail(noSuccess);
    e.preventDefault();
  });
});
