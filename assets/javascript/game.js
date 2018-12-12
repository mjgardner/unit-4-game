crystalValue = [];

function resetGame() {
    // random number between 19 and 120 inclusive
    $("#random-number").text(Math.floor(Math.random() * (120 - 19 + 1)) + 19);

    $("#game-score").text(0);

    // crystals are worth between 1 and 12
    for (var i = 0; i < 4; i++) {
        crystalValue[i] = Math.floor(Math.random() * 12) + 1;
    }
}

$(function() {
    resetGame();

    $(".crystal").click(function() {
        var gameScore    = parseInt( $("#game-score").text() );
        var randomNumber = parseInt( $("#random-number").text() );
        gameScore += crystalValue[$(this)[0].id];
        $("#game-score").text(gameScore);

        if (gameScore == randomNumber) {
            $("#wonOrLost").text("You won!");
            $("#wins").text(parseInt( $("#wins").text() ) + 1);
            resetGame();
        }
        else if (gameScore > randomNumber) {
            $("#wonOrLost").text("You lost!");
            $("#losses").text(parseInt( $("#losses").text() ) + 1);
            resetGame();
        }
    });
});
