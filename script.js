// Change the text content
document.getElementById("change-text-btn").addEventListener("click", function () {
  document.getElementById("main-heading").textContent = "You clicked the button!";
});

// Change the style of an element
document.getElementById("change-style-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "#f0f8ff";
  document.getElementById("intro-text").style.color = "blue";
});

// Add a new list item
document.getElementById("add-element-btn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${document.getElementById("item-list").children.length + 1}`;
  document.getElementById("item-list").appendChild(newItem);
});

// Remove the last list item
document.getElementById("remove-element-btn").addEventListener("click", function () {
  const list = document.getElementById("item-list");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
});
