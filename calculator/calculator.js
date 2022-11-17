class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.operatorCheck = true;
    this.clear();
  }
  appendNumber(number) {
    this.displayContent += number;
    this.operatorCheck = false;
  }

  appendOperator(operator) {
    if (this.operatorCheck) return false;
    this.displayContent += operator;
    this.operatorCheck = true;
  }

  clear() {
    this.displayContent = "";
    this.displayElement.value = 0;
  }

  equals() {
    this.displayContent = eval(
      this.displayContent.replace("\u00D7", "*").replace("\u00F7", "/")
    );
  }

  updateDisplay() {
    this.displayElement.value = this.displayContent;
  }
}

const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector("input");

const calculator = new Calculator(displayElement);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.type) {
      case "operator":
        calculator.appendOperator(button.innerText);
        calculator.updateDisplay();
        break;
      case "ac":
        calculator.clear();
        break;
      case "equals":
        calculator.equals();
        calculator.updateDisplay();
        break;
      default:
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        break;
    }
  });
});
