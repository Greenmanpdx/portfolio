'use strict';
var round = 1;

function Die(id) {
    this.id = id;
    this.val = 0;
    this.held = false;

    this.setVal = function () {
        if (!this.held) {
            this.val = Math.floor(Math.random() * 6) + 1;
            this.render();
        }
    };


    this.render = function () {
        var img = document.createElement("IMG")
        img.src= "/static/portfolio/angryDice/img/"+this.val+".png";
        $('#'+this.id).html(img);
        // document.getElementById(this.id).innerHTML = this.val.toString();
    }
}

function changeRound() {
    $('#roundNumber').html(round.toString());

}

function releaseHold() {
    die1.held = false;
    die2.held = false;
    $('#die1').css('borderColor', 'black');
    $('#die2').css('borderColor', 'black');

}

function checkRound() {
    if (die1.val === 3 && die2.val === 3) {
        round = 1;
        changeRound();
        $('#message').html('Angry Dice send you back to round 1.');
        releaseHold();
    } else if (round === 1 && die1.val + die2.val === 3) {
        round = 2;
        changeRound();
        releaseHold();
    } else if (round === 2 && (die1.val === 3 || die1.val === 4) && (die2.val === 3 || die2.val === 4) && die1.val + die2.val === 7) {
        round = 3;
        changeRound();
        releaseHold();
    } else if (round === 3 && die1.val + die2.val === 11) {
        $('#message').html( 'You Win!!!');
        changeRound();
        releaseHold();
    }
}

var die1 = new Die('die1');
var die2 = new Die('die2');

$('#roll').click(function (e){
    e.preventDefault();
    die1.setVal();
    die2.setVal();
    checkRound();
});

$('.dieClick').click(function () {
        if ($(this).attr('id') === 'die1' && !die1.held) {
            die1.held = true;
            $(this).css('borderColor', 'red');
            console.log(die1.held)
        } else if ($(this).attr('id') === 'die1' && die1.held) {
            die1.held = false;
            $(this).css('borderColor', 'black');
        } else if ($(this).attr('id') === 'die2' && !die2.held) {
            die2.held = true;
            $(this).css('borderColor', 'red');
        } else if ($(this).attr('id') === 'die2' && die2.held) {
            die2.held = false;
            $(this).css('borderColor', 'black');
        }
    });

















