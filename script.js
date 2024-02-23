/*
class oluştur
ilk olarak constructor oluştur
sonra clear ve display metodunu yaz
sayıları al
işlemlerini al
sonuc yazdır

*/

class Calculator
{
    constructor(previous,current)
    {
        this.previous = previous;
        this.current = current;
        this.clear()
    }
    clear()
    {
        this.currentOperand  = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete()
    {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }
    getNumber(number)
    {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    getOperation(operation)
    {
        if(this.currentOperand == '') return
        if(this.previousOperand !='')
        {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand ='';

    }
    compute()
    {
        let computetion;
        let prev = parseFloat(this.previousOperand);
        let curr = parseFloat(this.currentOperand);
        let operation = this.operation;
        if(isNaN(prev) || isNaN(curr)) return
        switch(operation)
        {
            case '+':
                computetion = prev + curr;
                break;
            case '-':
                computetion = prev - curr;
                break;
            case '/':
                computetion = prev / curr;
                break;
            case '*':
                computetion = prev * curr;
                break;
            default:
                return;
        }
        this.currentOperand = computetion;
        this.previousOperand = '';
        this.operation = '';
        
    }


    display()
    {
        this.current.innerText = this.currentOperand;
        // this.previous.innerText = this.previousOperand;
        if(this.operation != null)
        {
            this.previous.innerText = `${this.previousOperand} ${this.operation}`;
        }
    }
}
const numberButtons = document.querySelectorAll('[data-numbers]');
const operationButtons = document.querySelectorAll('[data-operations]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clear-all]');
const equelsButton = document.querySelector('[data-equels]');
const previous = document.querySelector('[data-previous]');
const current = document.querySelector('[data-current]');

const calculator = new Calculator(previous,current);

numberButtons.forEach(button =>
    {
        button.addEventListener('click' , () =>
        {
            calculator.getNumber(button.innerText);
            calculator.display();
        })
    })
operationButtons.forEach(button =>
    {
        button.addEventListener('click' , () =>
        {
            calculator.getOperation(button.innerText);
            calculator.display();
        })
    })
equelsButton.addEventListener('click' , () =>
{
    calculator.compute();
    calculator.display();
})
allClearButton.addEventListener('click' , () =>
{
    calculator.clear();
    calculator.display();
})
deleteButton.addEventListener('click' , () =>
{
    calculator.delete();
    calculator.display();
})