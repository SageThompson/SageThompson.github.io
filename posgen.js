/*eslint-env es6*/ 
/*eslint-env browser*/
/* eslint-disable no-unused-vars */


const posQuotes = ["Say something positive, and you\'ll see something positive",
                "If you can stay positive in a negative situation, you win", 
                 "Only in the darkness can you see the stars",
                 "You do not find the happy life. You make it",
                 "Those who don\'t believe in magic will never find it"];

var pIndex = Math.floor(Math.random() * 5);

function PosGen() {
    document.querySelector("#pos").innerHTML = posQuotes[pIndex];
    var txt = document.getElementById('pos');
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    txt.style.fontSize = 26 + 'px';
}



const movQuotes = ["Life is 10% what happens to you and 90% how you react to it.",
                "Start where you are. Use what you have. Do what you can.", 
                 "Aim for the moon. If you miss, you may hit a star.",
                 "Set your goals high, and don't stop till you get there.",
                 "Happiness is not a goal; it is a by-product."];

var mIndex = Math.floor(Math.random() * 5);

function MovGen() {
    document.querySelector("#mov").innerHTML = movQuotes[mIndex];
    var txt = document.getElementById('mov');
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    txt.style.fontSize = 26 + 'px';
}