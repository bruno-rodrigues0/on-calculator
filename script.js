Number.prototype.toLocaleString('pt-br')

const display = document.querySelector("#idexpression")

const displayInArea = value => {
    display.value += value;
};

const backspace = () => {
    let value = display.value;
    value = value.split('');
    value.pop();
    value = value.join('');

    display.value = value;
    return;
}

const clean = () => {
    display.value ='';
    return;
}

const calculate = () => {
    let value = display.value;
    display.value = eval(value);
}
