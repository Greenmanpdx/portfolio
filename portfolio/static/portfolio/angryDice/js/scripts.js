// variables
// var {variable name} = {data type};

var name = 'Chris';

// data types
// strings
var string = 'this is a string';

// arrays (look like python lists)
var array = ['we would call this a list in python', 22, [4, 3.3], {'key': 'value'}];

// Javascript objects (look like python dictionaries)
var jsobj = {
    key1: 'value1',
    'key2': 'value2'
};

// int
var int = 231265154265564546321326589;

// float
var float = 3.14;

function myFunction(nm) {
    console.log(nm);
    // alert(nm);
}
// myFunction(name);

var greeting = function (nm) {
    var greet = 'Hello ';
    console.log(greet + nm);
};
// greeting(name);
function testBool() {
    // || is or in python
    // var bool = (true || false);

    // && is and in python
    // var bool = (true && false);

    // === is == in python
    // var bool = ('1' == 1); // true
    // var bool = ('1' === 1); // false

    // !== is != or not in python
    // var bool = ('1' !== 1); // false

    var bool = (2 >= 1); // false
    console.log(bool);
}

// control flow
var num = Math.floor(Math.random() * 100) + 1;
function guessNumber(guess) {
    var message;


    if (guess > num) {
        message = 'You guessed higher than the random number. Your guess was ' + guess + '.'
    } else if (guess < num) {
        message = 'You guessed lower than the random number. Your guess was ' + guess + '.'
    } else {
        message = 'You WIN!! The number was ' + num + '.'
    }

    var list = document.getElementById('message');
    var li = document.createElement('li'); // <li> </li>
    console.log(message);
    li.appendChild(document.createTextNode(message)); // <li>You guessed higher than the random number. Your guess was 55.</li>
    list.appendChild(li)
}
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.getElementById('guess').addEventListener('click', function () {
    event.preventDefault();
    var ourGuess = document.getElementById('valueGuess').value;
    guessNumber(ourGuess)
});

document.getElementById('mainBoldText').addEventListener('click', function () {
    document.getElementById('mainArt').style.display = none;
});
// document.getElementById('mainBoldText').style.color = '#ff0000';
// document.getElementById('mainBoldText').style.fontWeight = 'bold';