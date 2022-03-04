// Do I need variable for each input?
// Connect throughthe DOM?
// Arithmetic button, each button is now just a symbol. It doen't functiopn anything
// Have to difine the function for each button?
// Value for each input field can be anything
// Result must calculate the result of Value1 Value2 and after the the aritmethic function is called

// Telling Js what is each button. And coonect vis DOM
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");

// Define each value filed vis DOM
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");


// When event fired, what each button perform
plus.addEventListener('click',(e)=>{
    e.preventDefault();
    const plusResult = Number(value1.value) + Number(value2.value);
    result.value = plusResult;
})

minus.addEventListener('click',(e) => {
    e.preventDefault();
    const minusResult = Number(value1.value) - Number(value2.value);
    result.value = minusResult;
})

multiply.addEventListener('click',(e) => {
    e.preventDefault();
    const multiplyResult = Number(value1.value) * Number(value2.value);
    result.value = multiplyResult;
})

divide.addEventListener('click',(e) => {
    e.preventDefault();
    const divideResult = Number(value1.value) / Number(value2.value);
    result.value = divideResult;
})

