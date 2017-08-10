/**
 * Created by greenman on 6/29/17.
 */
// $('.hole').html("<img src='hole.jpg' />");
var timer;
var interval = 1000;
var score = 0;
var filledHoles = [];
var highScores =[];

function randomHole() {
    var emptyHole = false;
    while (emptyHole === false){
        var hole = Math.floor(Math.random() * 100) % 20 + 1;
        if ($.inArray(hole, filledHoles) === -1) {
        emptyHole = true;}
        console.log("while");
    }
    console.log('hole: ' + hole);
    return  hole;
}

function randomAlien() {
    var alienNumber = Math.floor(Math.random() * 10) % 3 +1;
    var alien;
    if (alienNumber === 1){alien = "<img src='/static/portfolio/images/alienintophat.png'/>" ;};
    if (alienNumber === 2){alien= "<img src='/static/portfolio/images/alien.png'/>"};
    if (alienNumber === 3){alien = "<img src='/static/portfolio/images/tokingalien.png'/>"};

    return alien;
}



$('#start').click(function()
{
    for(var i =1; i < 20; ++i){
        $("#" +i).html('');
    }
    $('#gameOver').html("");
    $('#playerScore').html(score);
    timer = setInterval(set, interval);
});

function set() {

        var alien = "<img src='/static/portfolio/images/alien.png'/>";

        console.log(filledHoles.length);
        if (filledHoles.length === 20){
            gameOver();


        }else {
            var hole = randomHole();

            $('#' + hole).html(alien);
            filledHoles.push(hole);
            if (interval > 100) {
                interval -= 10;
            }

            else {
                interval = interval / 2;
            }
            // console.log(interval);
            clearInterval(timer);
            timer = setInterval(set, interval);
        }
    }

$("#stop").click(function () {
    gameOver();

});

$(".hole").click(function () {
    var hole = parseInt($(this).attr('id'));


    if($.inArray(hole, filledHoles) > -1){
        score += 100;

        filledHoles.splice(filledHoles.indexOf(hole), 1);
        $('#' + hole).html("<img src='/static/portfolio/images/splat.png'/>");
    } else {score -= 50}
    $('#playerScore').html(score);

})

function gameOver() {
    clearInterval(timer);
    highScores.push(score);
    highScores.sort();
    highScores.reverse();
    $('#scoreList').html('');

    for (var i =0; i < highScores.length; ++i){
        $('#scoreList').append('<li>'+ highScores[i] +'</li>');

    }
    score = 0;

    $('#gameOver').html("<img src='/static/portfolio/images/gameover.svg'/>");

}