// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
function convertNumToString (num) {
    return num.toString()
}


  // const btn = document.getElementById("btn")
  // btn.addEventListener("click", displayNumToString)

  function displayNumToString() {
    const number = document.getElementById("userInput").value
    const numToString = convertNumToString(number)
    const type = typeof numToString
    document.getElementById("type").innerHTML = "Type after conversion: " + type
    document.getElementById("output").innerHTML = numToString
  }
  





// Write a JavaScript program to convert a string to a number.
  function stringToNum (str) {
    return Number(str)
    
}

  function displayStringToNum() {
    const string = document.getElementById("stringToNum").value
    const convertedString = stringToNum(string)
    // document.getElementById("typeOfStringToNum") = type
    document.getElementById("typeOfStringToNum").innerHTML =  "Type after conversion: " + typeof convertedString
    document.getElementById("outputStringToNum").innerHTML = convertedString
}
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  function checkType(value){
    return typeof value;
  }

  function displayTypeOfValues (){
    const displayType = document.getElementById("checkInputType").value
    const type = checkType(displayType)
    if(type === "string")
      document.getElementById("displayOutputType").innerHTML = checkType(type)

    
    }

  function displayNumberType(){
    const displayNumType = document.getElementById("checkNumberType").value
    const number = stringToNum(displayNumType)
    document.getElementById("displayNumberType").innerHTML = typeof  number
  }


// Write a JavaScript program that adds 2 numbers together.
function add(a,b){
  return a + b
}

function displaySum(){
  const num1 = document.getElementById("number1").value
  const num2 = document.getElementById("number2").value
  const sum = stringToNum(num1) + stringToNum(num2)
  document.getElementById("displaySum").innerHTML = sum
}

// Write a JavaScript program that runs only when 2 things are true.
function bothTrue(thing1, thing2) {
    if(thing1 && thing2){
      return "they are both true"
    }
}

console.log(bothTrue(true, true))


// Write a JavaScript program that runs when 1 of 2 things are true.
function oneTrue(thing1, thing2) {
  if(thing1 || thing2){
    return "One is true"
  }
}

console.log(oneTrue(true, true))


// Write a JavaScript program that runs when both things are not true.  
function noneTrue(thing1, thing2) {
  if(thing1 === false && thing2 === false){
    return "not true"
  }
}

console.log(noneTrue(thing1, thing2))




// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
