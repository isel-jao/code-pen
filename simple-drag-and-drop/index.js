const items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list-items");

let draggedItem = null;

items.forEach((item) => {
  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(() => {
      item.style.opacity = "0.5";
    }, 0);
  });

  item.addEventListener("dragend", function () {
    setTimeout(() => {
      draggedItem.style.opacity = "1";
      draggedItem = null;
    }, 0);
  });
});

lists.forEach((list) => {
  list.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  list.addEventListener("drop", function (e) {
    e.preventDefault();
    this.append(draggedItem);
    this.classList.remove("drag-over");
  });
});
