$(document).ready(function () {

    var gifCount = 0;

    $("#addAnimal").on("click", function (event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        console.log(animal);

    })

});