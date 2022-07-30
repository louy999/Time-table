// function for active nav bar
function navBar() {
  let lis = document.querySelectorAll("ul li");
  let conTodo = document.querySelector(".contanier-todo-lis");
  let conTable = document.querySelector("#continer-table");
  let conTimer = document.querySelector("#continar-timer");
  lis.forEach((e) => {
    e.addEventListener("click", (e) => {
      for (i = 0; i < lis.length; i++) {
        lis[i].classList = "";
      }
      e.target.classList.add("active");
    });
  });
}
navBar();
function pro() {
  let lis = document.querySelectorAll("ul li");
  let conTodo = document.querySelector(".contanier-todo-lis");
  let conTable = document.querySelector("#continer-table");
  let conTimer = document.querySelector("#continar-timer");
  lis.forEach((e) => {
    if (e.classList == "active") {
      if (e.id !== "todo") {
        if (e.id !== "tabel") {
          if (e.id !== "timer") {
          } else {
            conTodo.style.display = "none";
            conTable.style.display = "none";
            conTimer.style.display = "flex";
          }
        } else {
          conTodo.style.display = "none";
          conTable.style.display = "block";
          conTimer.style.display = "none";
        }
      } else {
        conTodo.style.display = "block";
        conTable.style.display = "none";
        conTimer.style.display = "none";
      }
    }
  });
}
pro();
setInterval(pro, 10);
