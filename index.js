const addButton = document.getElementById('addButton');
const subButton = document.getElementById('substractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');

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

addButton.addEventListener('click',()=>{
   outputList.append(add(parseFloat(var1.value),parseFloat(var2.value)));
  outputList.append("\n");
   
})

multiplyButton.addEventListener('click',()=>{
    outputList.append(multiply(parseFloat(var1.value),parseFloat(var2.value)));
   outputList.append("\n");
    
 })

 divideButton.addEventListener('click',()=>{
    outputList.append(divide(parseFloat(var1.value),parseFloat(var2.value)));
   outputList.append("\n");
    
 })

subButton.addEventListener('click',()=>{
    outputList.append(subtract(parseFloat(var1.value),parseFloat(var2.value)));
   outputList.append("\n");

   
   
    
 })
console.log(multiplyButton)


/* 
 var newItem = document.createElement("li");
    newItem = add(var1,var2);
    outputList.appendChild(newItem);
    console.log("added");
    */