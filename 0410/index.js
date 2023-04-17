let Button0 = document.querySelector("#zero");
let Button1 = document.querySelector("#one");
let Button2 = document.querySelector("#two");
let Button3 = document.querySelector("#three");
let Button4 = document.querySelector("#four");
let Button5 = document.querySelector("#five");
let Button6 = document.querySelector("#six");
let Button7 = document.querySelector("#seven");
let Button8 = document.querySelector("#eight");
let Button9 = document.querySelector("#nine");
let CalculatorPTag = document.querySelector("#CalculatorValue");
let realValue = document.querySelector("#realValue");

let CalculatorValue1 = "";
let Secondflag = false; //boolean
let MultiSecondflag = false; //boolean
let DivideSecondflag = false; //boolean
let RemainSecondflag = false; //boolean
let sum = 0;

function OnClickButton(value) {
  CalculatorValue1 += value.target.innerText;
  CalculatorPTag.innerText = CalculatorValue1;
}

Button0.addEventListener("click", OnClickButton);
Button1.addEventListener("click", OnClickButton);
Button2.addEventListener("click", OnClickButton);
Button3.addEventListener("click", OnClickButton);
Button4.addEventListener("click", OnClickButton);
Button5.addEventListener("click", OnClickButton);
Button6.addEventListener("click", OnClickButton);
Button7.addEventListener("click", OnClickButton);
Button8.addEventListener("click", OnClickButton);
Button9.addEventListener("click", OnClickButton);

function PlusButton() {
  sum += Number(CalculatorValue1);
  CalculatorPTag.innerText = "0";
  CalculatorValue1 = "";
  realValue.innerText = sum;
}

function MinusButton() {
  if (Secondflag) {
    sum -= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  } else {
    sum += Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  }
  Secondflag = !Secondflag;
}

function MultiButton() {
  if (MultiSecondflag) {
    sum *= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  } else {
    sum += Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  }
  MultiSecondflag = !MultiSecondflag;
}

function DivideButton() {
  if (DivideSecondflag) {
    sum /= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  } else {
    sum += Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  }
  DivideSecondflag = !DivideSecondflag;
}

function RemainButton() {
  if (RemainSecondflag) {
    sum %= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  } else {
    sum += Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  }
  RemainSecondflag = !RemainSecondflag;
}

function Result() {
  if (Secondflag) {
    sum -= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
    Secondflag = !Secondflag;
  } else if (MultiSecondflag) {
    sum *= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
    MultiSecondflag = !MultiSecondflag;
  } else if (DivideSecondflag) {
    sum /= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
    MultiSecondflag = !MultiSecondflag;
  } else if (RemainSecondflag) {
    sum %= Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
    RemainSecondflag = !RemainSecondflag;
  } else {
    sum += Number(CalculatorValue1);
    CalculatorPTag.innerText = "0";
    CalculatorValue1 = "";
    realValue.innerText = sum;
  }
  sum = 0;
}
