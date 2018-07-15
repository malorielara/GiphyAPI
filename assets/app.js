$(document).ready(function () {

    var gifCount = 0;

    $("#addAnimal").on("click", function (event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        console.log(animal);

        var gifClose = $("<button>");

        gifClose.attr("animal-name", animal);
        gifClose.attr("type", "button");
        gifClose.attr("type", "submit");
        gifClose.addClass("btn btn-primary");
        gifClose.text(animal);

        $("#animal").append(gifClose);

        $("#animal-input").val("");

        gifCount++;
    })

}); 