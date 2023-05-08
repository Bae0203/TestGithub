let inputValue = document.querySelector("#input");
let button = document.querySelector("#plus");
let List = document.querySelector("#List");

button.addEventListener("click", ValueAdd);

function InputClean() {
  inputValue.value = "";
}

//todo list 값 추가
function ValueAdd() {
  let TodoListValue = inputValue.value;
  let NewTodoListValue = document.createElement("li");
  let NewValue = document.createElement("p");

  NewValue.innerText = TodoListValue;
  NewTodoListValue.appendChild(NewValue);
  //   NewTodoListValue.value = TodoListValue; //li태그에 TodoList 값을 넣음

  List.appendChild(NewTodoListValue);
  InputClean();
}

//todo list 값 삭제
function ValueDel() {}
