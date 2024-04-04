const display = document.querySelector('#idexpression') as HTMLInputElement;

// Checa o tamanho da expressão e faz a coversão do tamanho da fonte
const checkLength = () => {
    let value: string = display.value; 

    if(value.length > 13) {
        display.classList.add('moreChar');
    } else {
        display.classList.remove('moreChar');
    }
}

// Adiciona os valores digitados no display
const displayInArea = (value: string) => {

    // Valor padrão do placeholder
    display.setAttribute('placeholder', '000');

    // Display recebe valor digitado
    display.value += value;

    // Impede o uso de operadores e caracteres especiais no inicio da expressão
    let especialChar: [...string[]] = ["*", "-", "+", "/", "."];

    especialChar.map(item => {
        if(display.value === item) {
            display.value = '';
        }
    });

    // Sempre chamada ao fim de funções para formatar o tamanho da fonte
    checkLength();
}

// Apaga o ultimo elemento da expressao
const backspace = () => {
    let value: string = display.value;

    // Remove ultimo elemento da string e atribui o valor ao display
    value = value.slice(0, -1);
    display.value = value;
    checkLength();
}

// Limpa o display
const clean = () => {
    display.value = '';

    checkLength();
}

// Faz o calculo ao clicar no botao de igual
const calculate = () => {
    let value: string = display.value;

    // Faz uma tentativa de calcular a operação
    try{
        let val: string = eval(value); // Resultado da operação em string
        let numVal: number = Number(val); // Mesmo resultado em number
        
        if (val && numVal !== Infinity) {

            // Tratamento de números muito grandes
            if(val.length > 21) {

                // Transforma o numero em uma potencia de 10
                display.value = numVal.toExponential();

                checkLength();
            } else {
                display.value = val;

                checkLength();
            }

        // Tratamento de valores infinitos
        } else if(numVal === Infinity){
            // Remove o valor do display e seta o placeholder como Infinity
            display.value = '';
            display.setAttribute('placeholder', 'Infinity');

            checkLength();

        // Tratamento de erros simples
        } else {
            display.setAttribute('placeholder', 'Error');

            checkLength();
        }

    // Tratamento de erros pesados
    } catch (error) {
        display.value = '';
        display.setAttribute('placeholder', 'Error');
    }   
}

// Aplica as classes das animações de showdown
const showdown = () => {
    const container = document.querySelector('.container') as HTMLElement;
    const arrow = document.querySelector('.arrow') as HTMLElement;

    arrow.classList.toggle('rotation');
    container.classList.toggle('position');

}
