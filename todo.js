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

const appendTodos = (text) => {
  const newId = id++;
  const newTodos = getAllTodos().concat({
    id: newId,
    isCompleted: false,
    content: text,
  });
  setTodos(newTodos);
  paintTodos();
};

const paintTodos = () => {
  todoListElem.innerHTML = ""; //todoListElem 요소안의 HTML 초기화
  const allTodos = getAllTodos(); // todos 배열가져오기

  // 'todo-item' 에 해당하는 HTML을 그려서 'todo-list '에 추가하기
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
