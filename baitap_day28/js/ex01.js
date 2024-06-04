var btnAddTask = document.querySelector("#todo_list__button");

var input = document.querySelector("#todo_list__input");
var listTask = document.querySelector(".todo_list__task");
var task = document.createElement("p");
var form_input = document.querySelector(".todo_list__form_input");

var cssIcon = {
  position: "absolute",
  right: "10%",
};
var danhSachTask = [];

task.style.position = "relative";

form_input.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    if (confirm("Bạn có muốn thêm không")) {
      danhSachTask.push({
        task: input.value.trim(),
        lineThrough: false,
      });
      input.value = "";
      loadTask();
    } else {
      return;
    }
  } else {
    alert("Dữ liệu không được để trống");
  }
});
function deleteTask(arr, index) {
  arr.splice(index, 1);
  loadTask();
}

let updatingTaskEls = [];

function loadTask() {
  listTask.innerHTML = "";
  danhSachTask.forEach((task, index) => {
    if (!updatingTaskEls.includes(task)) {
      const taskEl = document.createElement("p");
      taskEl.style.position = "relative";
      const textNode = document.createTextNode(task.task);
      taskEl.appendChild(textNode);
      taskEl.style.cursor = "pointer";
      taskEl.innerHTML = `<span>${taskEl.innerText}</span>`;
      taskEl.querySelector("span").addEventListener("click", (e) => {
        task.lineThrough = !task.lineThrough;
        if (task.lineThrough) {
          taskEl.style.textDecoration = "line-through";
        } else {
          taskEl.style.textDecoration = "";
        }
      });
      if (task.lineThrough) {
        taskEl.style.textDecoration = "line-through";
      }
      const ElIcon = document.createElement("span");
      ElIcon.innerHTML = `<i class="fa-regular fa-pen-to-square icon-update"></i> <i class="fa-solid fa-trash icon-delete"></i>`;
      taskEl.appendChild(ElIcon);
      const cssIcon = {
        position: "absolute",
        right: "0",
        cursor: "pointer",
        top: "30%",
      };
      Object.assign(ElIcon.style, cssIcon);
      listTask.appendChild(taskEl);
      const iconUpdates = taskEl.querySelector(".icon-update");
      iconUpdates.addEventListener("click", () => {
        if (!updatingTaskEls.includes(task)) {
          updatingTaskEls.push(task);
          iconUpdates.style.display = "none";
          taskEl.style.display = "none";

          const updateInput = document.createElement("input");
          updateInput.type = "text";
          updateInput.classList.add("todo_list__input-update");
          updateInput.value = task.task;

          const updateButton = document.createElement("button");
          updateButton.textContent = "Cập nhật";
          updateButton.classList.add("todo_list__button-update");

          const updateContainer = document.createElement("div");
          updateContainer.classList.add("update-container");
          updateContainer.appendChild(updateInput);
          updateContainer.appendChild(updateButton);
          taskEl.parentNode.insertBefore(updateContainer, taskEl.nextSibling);

          updateButton.addEventListener("click", () => {
            task.task = updateInput.value;
            updateContainer.remove();
            taskEl.style.display = "block";
            updatingTaskEls = updatingTaskEls.filter((t) => t !== task);
            loadTask();
          });
        }
      });
      const iconDelete = taskEl.querySelector(".icon-delete");
      iconDelete.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Bạn có muốn xóa không")) {
          deleteTask(danhSachTask, index);
        } else {
          return;
        }
      });
    }
  });

  updatingTaskEls.forEach((task) => {
    const updateInput = document.createElement("input");
    updateInput.type = "text";
    updateInput.classList.add("todo_list__input-update");
    updateInput.value = task.task;

    const updateButton = document.createElement("button");
    updateButton.textContent = "Cập nhật";
    updateButton.classList.add("todo_list__button-update");

    const updateContainer = document.createElement("div");
    updateContainer.classList.add("update-container");
    updateContainer.appendChild(updateInput);
    updateContainer.appendChild(updateButton);
    listTask.appendChild(updateContainer);

    updateButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Bạn có muốn update không")) {
        task.task = updateInput.value;
        updateContainer.remove();
        updatingTaskEls = updatingTaskEls.filter((t) => t !== task);
        loadTask();
      } else {
        return;
      }
    });
  });
}
