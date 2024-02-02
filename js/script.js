var counter;

function isFill() {
  return document.getElementById("add_new_task").value != "";
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add_task();
  }
});
function add_task() {
  if (isFill()) {
    var formContent = document.getElementById("form_content");

    counter = formContent.elements.length;

    var newTask = document.getElementById("add_new_task");
    var divContent = document.createElement("div");
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "checkbox" + counter;
    checkbox.id = "checkbox" + counter;
    checkbox.className = "checkbox";
    checkbox.setAttribute("onclick","toggleCheckbox(this)");
    checkbox.setAttribute("name", "checkbox");

    var label = document.createElement("label");
    label.innerHTML = newTask.value;
    label.className = "label";
    label.id = "label" + counter;
    label.setAttribute("for", checkbox.id);
    label.setAttribute("name", "label");

    divContent.id = "div_content" + counter;
    divContent.className = "div_content";
    divContent.setAttribute("onclick", "checkBox(this)");
    var breake = document.createElement("br");

    var taskContent = document.getElementById("class_content");

    document.body.appendChild(taskContent);
    taskContent.appendChild(formContent);
    formContent.appendChild(divContent);

    divContent.appendChild(checkbox);
    divContent.appendChild(label);
    divContent.appendChild(breake);

    clearLabel();
  }
}

function clearLabel() {
  document.getElementById("add_new_task").value = "";
}
function checkBox(item) {
  var children = item.children;
  var childInput = children[0];
  
  toggleCheckbox(childInput);
}

function toggleCheckbox(childInput) {
  var childLabel = childInput.nextSibling;
  if (!childInput.checked) childLabel.className = "labelOn";
  else childLabel.className = "label";
  childInput.checked = !childInput.checked;
}

// document.cookie = "saxeli=gela; expires=Thu, 01 Jan 2025 00:00:00 UTC";
// console.log(document.cookie);

//localStorage

// localStorage.setItem("id");

//Dates
const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "long" });

document.getElementById("date").innerHTML = month + " " + day;
