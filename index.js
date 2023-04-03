let InputIdValue = document.querySelector("#id");
let InputPasswordValue = document.querySelector("#password");
let ButtonValue = document.querySelector("#btn");

ButtonValue.addEventListener("click", Onclick);

function Onclick() {
  alert(
    "ID :" +
      InputIdValue.value +
      "\n" +
      "PASSWORD : " +
      InputPasswordValue.value
  );
}
