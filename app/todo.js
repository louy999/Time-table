let inputTodo = document.querySelector(".input input");
let circleInput = document.querySelector(".input .circle-input");
let list = document.querySelector(".todo-list .list");
let items = document.querySelector(".status .itm");
let todo;
function createTodo() {
  circleInput.addEventListener("click", () => {
    let createdivTodo = document.createElement("div");
    createdivTodo.id = "todo";
    createdivTodo.innerHTML += `
   <div>
      <div class="circle-todo"></div>
        <p>${inputTodo.value}</p>
   </div>
        <img class="cross" src="../../images/icon-cross.svg">`;
    if (inputTodo.value != "") {
      list.appendChild(createdivTodo);
      saveToLocalStorage();
    }
    itim();
    check();

    inputTodo.value = "";
  });
}
createTodo();

function itim() {
  let todo = document.querySelectorAll(".list #todo");
  items.innerHTML = `${todo.length} items left`;
}
let dataPro;
if (localStorage.todo != null) {
  dataPro = JSON.parse(localStorage.todo);
} else {
  dataPro = [];
}

function saveToLocalStorage() {
  let createdivTodo = document.querySelector("#todo");
  let newPro = {
    value: inputTodo.value,
  };
  dataPro.push(newPro);
  window.localStorage.setItem("todo", JSON.stringify(dataPro));
}
for (i = 0; i < dataPro.length; i++) {
  list.innerHTML += `  
  <div id="todo">
   <div>
      <div class="circle-todo"></div>
        <p>${dataPro[i].value}</p>
   </div>
        <img class="cross" src="../../images/icon-cross.svg"></div>`;
  itim();
}

function clearcross() {
  document.body.addEventListener("click", (e) => {
    if (e.target.classList == "cross") {
      para = e.target.parentElement.children[0].children[1].innerHTML;
      for (i = 0; i < dataPro.length; i++) {
        if (dataPro[i].value == para) {
          e.target.parentElement.remove();
          dataPro.splice(i, 1);
          localStorage.todo = JSON.stringify(dataPro);
        }
      }
    }
    itim();
  });
}
clearcross();

function check() {
  let checkinput = document.querySelectorAll("#todo .circle-todo");

  checkinput.forEach((e) => {
    e.addEventListener("click", () => {
      let todoCheck = e.parentElement.parentElement;
      if (todoCheck.classList != "completed") {
        e.innerHTML = `<img class="img-check" src='../../images/icon-check.svg'>`;
        todoCheck.classList = "completed";
      } else {
        e.innerHTML = "";
        todoCheck.classList = "";
      }
    });
  });
}
check();

function filter() {
  let filters = document.querySelectorAll(".act > div");
  let all = document.querySelector(".act #all");
  let active = document.querySelector(".act #active");
  let completed = document.querySelector(".act #completed");
  let listTododi = document.querySelectorAll(".todo-list .list>div");
  let listTodo = document.querySelector(".todo-list .list");
  filters.forEach((e) => {
    e.addEventListener("click", () => {
      clearActive();
      e.classList = "active";
    });
  });
  all.addEventListener("click", () => {
    for (i = 0; i < dataPro.length; i++) {
      list.innerHTML += `  
  <div id="todo">
   <div>
      <div class="circle-todo"></div>
        <p>${dataPro[i].value}</p>
   </div>
        <img class="cross" src="../../images/icon-cross.svg"></div>`;
      itim();
      check();
    }
  });
  completed.addEventListener("click", () => {
    listTododi.forEach((e) => {
      if (e.classList == "completed") {
        listTodo.appendChild(e);
      } else {
        // console.log(listTodo);
        listTodo.innerHTML = "";
      }
    });
    check();
  });
}
filter();

function clearActive() {
  let filters = document.querySelectorAll(".act > div");
  filters.forEach((e) => {
    e.classList = "";
  });
}
