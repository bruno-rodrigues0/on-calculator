"use strict";
const display = document.querySelector('#idexpression');
const checkLength = (value) => {
    if (value.length > 13) {
        display.classList.add('moreChar');
    }
    else {
        display.classList.remove('moreChar');
    }
};
const displayInArea = (value) => {
    display?.setAttribute('placeholder', '000');
    display.value += value;
    let especialChar = ["*", "-", "+", "/", "."];
    especialChar.map(item => {
        if (display.value === item) {
            display.value = '';
        }
    });
    checkLength(display.value);
};
const backspace = () => {
    let value = display.value;
    value = value.slice(0, -1);
    display.value = value;
    checkLength(display.value);
};
const clean = () => {
    display.value = '';
    checkLength(display.value);
};
const calculate = () => {
    let value = display.value;
    try {
        let val = eval(value);
        let numVal = Number(val);
        if (val && numVal !== Infinity) {
            if (val.length > 21) {
                display.value = numVal.toExponential();
                checkLength(display.value);
            }
            else {
                display.value = val;
                checkLength(display.value);
            }
        }
        else if (numVal === Infinity) {
            display.value = '';
            display.setAttribute('placeholder', 'Infinity');
            checkLength(display.value);
        }
        else {
            display.setAttribute('placeholder', 'Error');
            checkLength(display.value);
        }
    }
    catch (error) {
        display.value = '';
        display.setAttribute('placeholder', 'Error');
    }
};
const showdown = () => {
    const container = document.querySelector('.container');
    const arrow = document.querySelector('.arrow');
    arrow.classList.toggle('rotation');
    container.classList.toggle('position');
};
