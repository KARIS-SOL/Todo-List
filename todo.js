"use strict";
const todoInputElem = document.querySelector(".todo-input");
const todoListElem = document.querySelector(".todo-list");

let todos = [];
let id = 0;

const setTodos = (newTodos) => {
  todos = newTodos;
};
const getAllTodos = () => {
  return todos;
};

const appendTodos = () => {
  const newId = id++;
  const newTodos = getAllTodos().concat({
    id: newId,
    isCompleted: false,
    content: text,
  });
  setTodos(newTodos);
  paintTodos();
};

const deleteTodo = (todoId) => {
  console.log(todoId);
  const newTodos = getAllTodos().filter((todo) => todo.id !== todoId);
  setTodos(newTodos);
  paintTodos();
};

const paintTodos = () => {
  todoListElem.innerHTML = ""; //todoListElem 요소 안의 HTML 초기화
  const allTodos = getAllTodos(); // todos 배열 가져오기

  // "todo-item" 에 해당하는 HTML 을 그려서 "todo-list"에 추가하기
  allTodos.forEach((todo) => {
    const todoItemElem = document.createElement("li");
    todoItemElem.classList.add("todo-item");

    todoItemElem.setAttribute("data-id", todo.id);

    const checkboxElem = document.createElement("div");
    checkboxElem.classList.add("checkbox");
    checkboxElem.addEventListener("click", () => completeTodo(todo.id));
    //click 이벤트 발생시, 완료 처리

    const todoElem = document.createElement("div");
    todoElem.classList.add("todo");
    todoElem.innerText = todo.content;

    const delBtnElem = document.createElement("button");
    delBtnElem.classList.add("delBtn");
    delBtnElem.addEventListener("click", () => deleteTodo(todo.id));
    delBtnElem.innerHTML = "X";

    if (todo.isCompleted) {
      todoItemElem.classList.add("checked");
      checkboxElem.innerText = "✔";
    }
  });
};

const init = () => {
  todoInputElem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      appendTodos(e.target.value);
      todoInputElem.value = "";
    }
  });
};

init();

// 'todo-item' 에 해당하는 HTML을 그려서 'todo-list '에 추가하기
