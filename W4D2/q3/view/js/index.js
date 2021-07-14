$(function () {
  function clearFeedback() {
    $("#feedback").text("");
  }
  $(".addToCart").submit((e) => {
    const data = {
      name: $("#name").val(),
      price: $("#price").val(),
      id: $("#id").val(),
    };

    $.post({
      url: "/addToCart",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
    }).done((res) => {
      $("#quantity").text(res);
      $("#feedback").text("Successful!");
      setTimeout(clearFeedback, 2000);
    });

    e.preventDefault();
  });
});
