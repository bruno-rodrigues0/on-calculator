const display = document.querySelector("#idexpression");

const checkLength = (value) => {
  if (value.length > 13) {
    display.classList.add("moreChar");
  } else {
    display.classList.remove("moreChar");
  }
};

const displayInArea = (value) => {
  display.setAttribute("placeholder", "000");

  display.value += value;

  let especialChar = ["*", "-", "+", "/", "."];

  especialChar.map((item) => {
    if (display.value === item) {
      display.value = "";
    }
  });
  checkLength(display.value);
};

const backspace = () => {
  let value = display.value;
  value = value.split("");
  value.pop();
  value = value.join("");

  display.value = value;

  checkLength(display.value);
  return;
};

const clean = () => {
  display.value = "";

  checkLength(display.value);
  return;
};

const calculate = () => {
  let value = display.value;

  try{
    let val = eval(value);

    if (value) {

        if (val.length > 21) {
          display.value = val.toExponential();
    
          checkLength(display.value);
        } else {
          display.value = val;
    
          checkLength(display.value);
        }
    
      } else if (val === Infinity) {
        display.setAttribute("placeholder", "Infinity");
    
        checkLength(display.value);
      } else {
        display.setAttribute("placeholder", "Error");
    
        checkLength(display.value);
      }
  } catch (e) {
    display.value = '';
    display.setAttribute("placeholder", "Error");
  }
};
