const display = document.querySelector("#idexpression");

// Checa o tamanho do valor e adapta o font-size
const checkLength = (value) => {
  if (value.length > 13) {
    display.classList.add("moreChar");
  } else {
    display.classList.remove("moreChar");
  }
};

const displayInArea = (value) => {

  //Caso o valor do placeholder seja um 'error', reseta para '000'
  display.setAttribute("placeholder", "000");

  display.value += value;

  // Set de caracteres especiais
  let especialChar = ["*", "-", "+", "/", "."];

  // Caso a expressão comece com um caractere especial, o valor será nulo
  // Isso impede bugs de expressão
  especialChar.map((item) => {
    if (display.value === item) {
      display.value = "";
    }
  });
  
  checkLength(display.value);
};

// Botão de apagar ultimo item
const backspace = () => {
  let value = display.value;

  // Transforma a string em um array
  value = value.split("");

  // Remove o ultimo item do array
  value.pop();

  //transforma o array em string
  value = value.join("");

  display.value = value;

  checkLength(display.value);
  return;
};

// limpa toda a expressão
const clean = () => {
  display.value = "";

  checkLength(display.value);
  return;
};

const calculate = () => {
  let value = display.value;
  
  try{
    // Transforma a string em expressão aritmetica e retorna o valor
    let val = eval(value);

    if (value) {

      // tratamento de numeros muito grandes
        if (val.length > 21) {
          display.value = val.toExponential();
    
          checkLength(display.value);
        } else {
          display.value = val;
    
          checkLength(display.value);
        }
    
        // tratamente de valores infinitos (ainda em desenvolvimento)
      } else if (val === Infinity) {
        display.setAttribute("placeholder", "Infinity");
    
        checkLength(display.value);
      } else {
        display.setAttribute("placeholder", "Error");
    
        checkLength(display.value);
      }
      // tratamento de erros
  } catch (e) {
    display.value = '';
    display.setAttribute("placeholder", "Error");
  }
};

