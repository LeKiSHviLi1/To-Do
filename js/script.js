var i = 0;


function add_task() {
    
var new_task = document.getElementById("add_new_task");

var form_content = document.createElement("form");
var checkbox = document.createElement("input");


checkbox.type = "checkbox";
checkbox.name = "checkbox"+(i + 1);
checkbox.id = "checkbox" + (i + 1);
checkbox.className = "checkbox";

var label = document.createElement("label");
label.innerHTML = new_task.value;
label_id = "checkbox"+(i + 1);
label.setAttribute("for",label_id);

form_content.id = "form_content"+(i+1);
form_content.className = "form_content"
var breake = document.createElement("br");


var task_content = document.getElementById("class_content")

document.body.appendChild(task_content);
task_content.appendChild(form_content);

form_content.appendChild(checkbox);
form_content.appendChild(label);
form_content.appendChild(breake);

i=i+1;
clearLable();
}



function clearLable(){
    document.getElementById("add_new_task").value = '';
}