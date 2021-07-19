const displayFirstElement = document.querySelector(".display-1");
const dispaySecondElement = document.querySelector(".display-2");
const tempResultElement = document.querySelector(".temp-result");
const numberButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearAllButton = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");

let firstNum = "";
let secondNum = "";
let result = null;
let lastOperation = "";
let haveDecimal = false;;

numberButton.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText==="." && !haveDecimal){
            haveDecimal=true;
        }
        else if(e.target.innerText==="." && haveDecimal)
        {
            return;
        }
        secondNum+=e.target.innerText;
        dispaySecondElement.innerText=secondNum;
    })

});

operationButton.forEach((operation)=>{
    operation.addEventListener('click',(e)=>{
       if(!secondNum) return;
       haveDecimal=false;
       const operationName=e.target.innerText;
       if(firstNum && secondNum && lastOperation){
           mathOperation();
       }
       else{
           result=parseFloat(secondNum); 
       }
       clearVar(operationName);
       lastOperation=operationName;
    })
});

function clearVar(name=''){
    firstNum+=secondNum+" "+name+" ";
    displayFirstElement.innerText=firstNum;
    dispaySecondElement.innerText="";
    secondNum="";
    tempResultElement.innerText=result;
}

function mathOperation(){
    if(lastOperation==='+'){
        result= parseFloat(result)+parseFloat(secondNum);
    }
    else if(lastOperation==='-'){
        result= parseFloat(result)-parseFloat(secondNum);
    }
    else if(lastOperation==='X'){
        result= parseFloat(result)*parseFloat(secondNum);
    }
    else if(lastOperation==='/'){
        result= parseFloat(result)/parseFloat(secondNum);
    }
    else if(lastOperation==='%'){
        result= parseFloat(result) % parseFloat(secondNum);
    }
}

equalButton.addEventListener('click',(e)=>{
    if(!secondNum || !firstNum ) return;
    haveDecimal=false;
    mathOperation();
    clearVar();
    dispaySecondElement.innerText=result;
    tempResultElement.innerText="";
    secondNum=result;
    firstNum="";
});

clearAllButton.addEventListener('click',(e)=>{
    displayFirstElement.innerText="";
    dispaySecondElement.innerText="";
    displayFirstElement.innerText="";
    firstNum="";
    secondNum="";
    result="";
    tempResultElement.innerText="";
});

deleteButton.addEventListener('click',(e)=>{
    dispaySecondElement.innerText="";
    secondNum="";
});

window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButtonEl(e.key);
      // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
      // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
  });
  function clickButtonEl(key) {
    numberButton.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  }
  function clickOperation(key) {
    operationButton.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click();
      }
    });
  }
  function clickEqual() {
    equalButton.click();
  }



