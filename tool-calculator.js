let calculatorBox = document.getElementById("calculator-box");

let buttons = Array.from(document.getElementsByClassName("buttonC"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        calculatorBox.innerText = "";
        break;
      case "←":
        calculatorBox.innerText = calculatorBox.innerText.slice(0, -1);
        break;
      case "=":
        try {
          calculatorBox.innerText = eval(calculatorBox.innerText);
        } catch (error) {
          calculatorBox.innerText = "Error! Do not break me, please!";
        }
        break;
      case "+":
        calculatorBox.innerText += "+";
        break;
      case "-":
        calculatorBox.innerText += "-";
        break;
      case "*":
        calculatorBox.innerText += "*";
        break;
      case "/":
        calculatorBox.innerText += "/";
        break;
      case "(":
        calculatorBox.innerText += "(";
        break;
      case ")":
        calculatorBox.innerText += ")";
        break;
      case "1":
        calculatorBox.innerText += 1;
        break;
      case "0":
        calculatorBox.innerText += 0;
        break;
      case "1":
        calculatorBox.innerText += 1;
        break;
      case "2":
        calculatorBox.innerText += 2;
        break;
      case "3":
        calculatorBox.innerText += 3;
        break;
      case "4":
        calculatorBox.innerText += 4;
        break;
      case "5":
        calculatorBox.innerText += 5;
        break;
      case "6":
        calculatorBox.innerText += 6;
        break;
      case "7":
        calculatorBox.innerText += 7;
        break;
      case "8":
        calculatorBox.innerText += 8;
        break;
      case "9":
        calculatorBox.innerText += 9;
        break;
      default:
        calculatorBox.innerText += e.target.innerText;
        break;
    }
  });
});
