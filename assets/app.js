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

        $("button").on("click", function () {
            var animalGIF = animal;
            console.log(animalGIF);

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animalGIF + "&api_key=dc6zaTOxFJmzC&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            })

            .done(function (response) {
                console.log(queryURL);
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var animalImg = $("<img>").addClass("gif");

                    animalImg.attr("src", results[i].images.fixed_height.url);
                    animalImg.attr("data-animate", results[i].images.fixed_height.url);
                    animalImg.attr("data-still", results[i].images.fixed_height_still.url);
                    animalImg.attr("data-state", "animate");
                    animalDiv.append(p);
                    animalDiv.append(animalImg);

                    $("#gifs-aqui").prepend(animalDiv);
                }
            });
        })

    });
});