class calculator{
   constructor(previuosOperand, currentOperand)
   {
      this.previuosOperand = previuosOperand;
      this.currentOperand = currentOperand;
   }
   clear() {
      
   }
   delete() {
      
   }
   appendNumber(number) {
      
   }
   chooseOperation(operation) {
      
   }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-del]');
const acButton = document.querySelector('[data-ac]');
const previuosOperand = document.querySelector('[data-po]');
const currentOperand = document.querySelector('[data-co]');     
