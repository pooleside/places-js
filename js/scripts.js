$(document).ready(function() {
  $("#add-detail").click(function() {
    $("#new-details").append('<div class="new-detail">' +
                                 '<div class="form-group">' +
                                   '<label for="new-time">Time of year</label>' +
                                   '<input type="text" class="form-control new-time">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-note">Notes</label>' +
                                   '<input type="text" class="form-control new-note">' +
                                 '</div>' +
                               '</div>');
  });
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();

    var newPlace = { city: inputtedCity, state: inputtedState, details: [] };

    $(".new-detail").each(function() {
      var inputtedTime = $(this).find("input.new-time").val();
      var inputtedLandmark = $(this).find("input.new-landmark").val();
      var inputtedNote = $(this).find("input.new-note").val();

      var newDetail = { time: inputtedTime, landmark: inputtedLandmark, note: inputtedNote };
      newPlace.details.push(newDetail);
    });


    $("ul#places").append("<li><span class='place'>" + newPlace.city + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.city);
      /*$(".city").text(newPlace.city);*/
      $(".state").text(newPlace.state);

      $("ul#details").text("");
      newPlace.details.forEach(function(detail) {
        $("ul#details").append("<ul>" + detail.time + ", " + detail.landmark + ", " + detail.note + "</ul>");
      });
    });

    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input.new-time").val("");
    $("input.new-landmark").val("");
    $("input.new-note").val("");
  });
});
