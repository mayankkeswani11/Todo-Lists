let btn = document.querySelector(".btn");
let inputTask = document.querySelector("#newTask");
let todos = document.querySelector(".todos");

btn.addEventListener("click", () => {
  if (inputTask.value === "") {
    alert("your write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    todos.appendChild(li);
    let element = `<img src="./images/dlt2.jpg" class="dlt" alt="not found">`;
    li.innerHTML += element;
  }
  inputTask.value = "";
  saveData();
});

todos.addEventListener(
  "click",
  (e) => {
    if (e.target.classList.contains("dlt")) {
      e.target.parentElement.remove();
      saveData();
    } else {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      }
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", todos.innerHTML);
}

function getItem() {
  todos.innerHTML = localStorage.getItem("data");
}

getItem();
