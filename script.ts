const display = document.querySelector('#idexpression') as HTMLInputElement;

const checkLength = (value: string) => {
    if(value.length > 13) {
        display.classList.add('moreChar');
    } else {
        display.classList.remove('moreChar');
    }
}

const displayInArea = (value: string) => {
    display?.setAttribute('placeholder', '000');

    display.value += value;

    let especialChar: [...string[]] = ["*", "-", "+", "/", "."];

    especialChar.map(item => {
        if(display.value === item) {
            display.value = '';
        }
    });

    checkLength(display.value);
}

const backspace = () => {
    let value: string = display.value;

    value = value.slice(0, -1);
    display.value = value;
    checkLength(display.value);
}

const clean = () => {
    display.value = '';

    checkLength(display.value);
}


const calculate = () => {
    let value: string = display.value;

    try{
        let val: string = eval(value);
        let numVal: number = Number(val);

        if (val && numVal !== Infinity) {
            if(val.length > 21) {
                display.value = numVal.toExponential();

                checkLength(display.value);
            } else {
                display.value = val;

                checkLength(display.value);
            }
        } else if(numVal === Infinity){
            display.value = '';
            display.setAttribute('placeholder', 'Infinity');

            checkLength(display.value);
        } else {
            display.setAttribute('placeholder', 'Error');

            checkLength(display.value);
        }


    } catch (error) {
        display.value = '';
        display.setAttribute('placeholder', 'Error');
    }   
}

const showdown = () => {
    const container = document.querySelector('.container') as HTMLElement;
    const arrow = document.querySelector('.arrow') as HTMLElement;

    arrow.classList.toggle('rotation');
    container.classList.toggle('position');

}
