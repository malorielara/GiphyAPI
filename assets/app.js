$(document).ready(function () {

    var gifCount = 0;

    // click listener to animalButton
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

        // event listener to all buttons
        $("button").on("click", function () {
            var animalGIF = animal;
            console.log(animalGIF);

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animalGIF + "&api_key=dc6zaTOxFJmzC&limit=10";

            // ajax with queryURL
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })

                .done(function (response) {
                    console.log(queryURL);
                    console.log(response);

                    // store ajax in the var results
                    var results = response.data;

                    // going through each item
                    // creating and storing a div, p, and an image tag
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
                    // animate click function
                    $(".gif").on("click", function () {
                        var dataState = $(this).attr("data-state");
                        if (dataState === "animate") {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        } else {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                        }
                    });
                })
        })
    })
});