function createCircles() {
    var redValue = document.getElementById("red").value;
    var greenValue = document.getElementById("green").value;
    var blueValue = document.getElementById("blue").value;
    var numberOfCircles = document.getElementById("number").value;
    var circlesContainer = document.getElementById("circles");

    var redCircles = "";
    var greenCircles = "";
    var blueCircles = "";

    for (var i = 0; i < numberOfCircles; i++) {
        redCircles += "<div class='circle red'></div>";
        greenCircles += "<div class='circle green'></div>";
        blueCircles += "<div class='circle blue'></div>";
    }

    circlesContainer.innerHTML = "<div class='row'>" + redCircles + "</div>" +
                                  "<div class='row'>" + greenCircles + "</div>" +
                                  "<div class='row'>" + blueCircles + "</div>";

    document.getElementById("start").disabled = false;
}

function startGame() {
    var redValue = document.getElementById("red").value;
    var greenValue = document.getElementById("green").value;
    var blueValue = document.getElementById("blue").value;

    var redDelay = redValue * 1000;
    var greenDelay = greenValue * 1000;
    var blueDelay = blueValue * 1000;

    setTimeout(function() {
        document.getElementsByClassName("row")[0].style.display = "none";
    }, redDelay);

    setTimeout(function() {
        document.getElementsByClassName("row")[1].style.display = "none";
    }, redDelay + greenDelay);

    setTimeout(function() {
        document.getElementsByClassName("row")[2].style.display = "none";
    }, redDelay + greenDelay + blueDelay);
}

function resetGame() {
    document.getElementById("circles").innerHTML = "";
    document.getElementById("start").disabled = true;
    document.getElementById("red").value = "";
    document.getElementById("green").value = "";
    document.getElementById("blue").value = "";
    document.getElementById("number").value = "";
}
