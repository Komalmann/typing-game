// 1 create the constants

const quotes = ["Good taste is for people who can’t afford sapphires.",

"May you be in heaven a full half-hour before the devil knows you're dead.",

"Intelligence is a very valuable thing, my friend. And usually, it comes far too late.",

"Everyone's a whore, Grace. We just sell different parts of ourselves",

"You know, gentlemen, there is hell, and there is another place below hell.",

"This place in under new management, by order of the Peaky Blinders.",


"I imagine being shot by a woman hurts the same as being shot by a man. It’s just more shameful.",

"You once said to me that men like us can never be loved. She loves me and all you got was a bullet.",

"We're a close family, always within punching distance."];

//store the list of words and the index of the word the player is typing.

let words = [];
let wordIndex = 0;

let startTime = Date.now();

const quoteElement = document.getElementById('quote');

const messageElement = document.getElementById('message');

const typedValueElement  = document.getElementById('typed-value');


let startbutton = document.getElementById('start');


// 2 Event Listener to start the game

startbutton.addEventListener('click',clickeventlisterener)

function clickeventlisterener()
{
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[quoteIndex];

    //put the quote into an array of words
    words = quote.split(' ');

    wordIndex = 0;

    //array of span elements is created so that we can set a class.
    const spanwords = words.map(function(word) {return `<span>${word}</span>`});

    quoteElement.innerHTML = spanwords.join(' ');

    quoteElement.childNodes[0].className ='highlight';
    
    messageElement.innerText = quote;
    

    typedValueElement.value = '';

    typedValueElement.focus();

    startTime = new Date.getTime();
}










