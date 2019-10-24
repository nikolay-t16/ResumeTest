import './dropdown.scss'

'use strict';
/*
$(document).ready(function() {
    $('.dropdown-option__confirm').on('click', function() {
        $('.dropdown').hide();
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest(".dropdown-wrapper").length === 0) {
            $(".dropdown").hide();
        }
    });
    $('.dropdown-input').on('focus', function() {
        $(this).siblings('.dropdown').show();
    });
    $('.dropdown').hide();
})

function guestCounter(div) {
    let box = document.body.querySelector('.' + div);

    let buttonPlus = box.querySelector('.button-plus');
    let buttonMinus = box.querySelector('.button-minus');
    let num = box.querySelector('.counter');
    let counter = 0;


    buttonPlus.onclick = function() {
        if (counter < 3) {
            num.innerHTML = ++counter;
        }
    }

    buttonMinus.onclick = function() {
        if (counter > 0) {
            num.innerHTML = --counter;
        }
    }
}

function totalGuestAmount() {
    let adult = document.querySelector('.first-counter').innerHTML;
    let child = document.querySelector('.second-counter').innerHTML;
    let baby = document.querySelector('.third-counter').innerHTML;

    return +adult + +child + +baby
}

function setInputValue(guestAmount) {
    let amount = guestAmount;

    switch (amount) {
        case 0:
            return 0;
        case 1:
            return ' гость';
        case 2:
        case 3:
        case 4:
            return ' гостя';
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return ' гостей';
    }
}

document.addEventListener('click', function() {
    let total =  document.body.querySelector('.dropdown-input');

    total.setAttribute('value',  + totalGuestAmount() + setInputValue(totalGuestAmount()));
})

let guest = new guestCounter('dropdown-controller_first');
let child = new guestCounter('dropdown-controller_second');
let baby = new guestCounter('dropdown-controller_third');

 */