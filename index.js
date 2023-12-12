const addButton = document.getElementById('addButton');
const subButton = document.getElementById('substractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');

const buttons = document.querySelectorAll('button');

const var1=document.querySelector('#var1')
const var2=document.querySelector('#var2')
const outputList = document.getElementById('resultList')

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function operate(operation, num1, num2) {
    switch(operation) {
        case 'addButton':
            return num1 + num2;
        case 'substractButton':
            return num1 - num2;
        case 'multiplyButton':
            return num1 * num2;
        case 'divideButton':
            return num1 / num2;
        default:
            return 0;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        const result = operate(buttonId, parseFloat(var1.value), parseFloat(var2.value));
        let newItem = document.createElement("li");
        newItem.innerText = result;
        outputList.appendChild(newItem);
        outputList.append("\n");
    });
});

/*

addButton.addEventListener('click',()=>{
    let newItem = document.createElement("li");
    newItem.innerText=(add(parseFloat(var1.value),parseFloat(var2.value)));
   outputList.appendChild(newItem);
  outputList.append("\n");

   
})

multiplyButton.addEventListener('click',()=>{
    let newItem = document.createElement("li");
    newItem.innerText=(multiply(parseFloat(var1.value),parseFloat(var2.value)));
   outputList.appendChild(newItem);
  outputList.append("\n");

    
 })

 divideButton.addEventListener('click',()=>{
    let newItem = document.createElement("li");
    newItem.innerText=(divide(parseFloat(var1.value),parseFloat(var2.value)));
   outputList.appendChild(newItem);
  outputList.append("\n");

    
 })

subButton.addEventListener('click',()=>{
     let newItem = document.createElement("li");
     newItem.innerText=(subtract(parseFloat(var1.value),parseFloat(var2.value)));
    outputList.appendChild(newItem);
   outputList.append("\n");

    
 })

console.log(multiplyButton)


*/
