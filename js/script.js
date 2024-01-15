var counter;

function isFill(){
    
return document.getElementById("add_new_task").value != '';
    
}

function add_task() {
    if(isFill()){
        
var formContent = document.getElementById("form_content");    

counter = formContent.elements.length;  


var newTask = document.getElementById("add_new_task");
var divContent = document.createElement("div");
var checkbox = document.createElement("input");


checkbox.type = "checkbox";
checkbox.name = "checkbox"+(counter);
checkbox.id = "checkbox" + (counter);
checkbox.className = "checkbox";

var label = document.createElement("label");
label.innerHTML = newTask.value;
label_id = "checkbox"+(counter);
label.setAttribute("for", label_id);

divContent.id = "form_content"+(counter);
divContent.className = "div_content"
var breake = document.createElement("br");


var taskContent = document.getElementById("class_content")

document.body.appendChild(taskContent);
taskContent.appendChild(formContent);
formContent.appendChild(divContent);

divContent.appendChild(checkbox);
divContent.appendChild(label);
divContent.appendChild(breake);



clearLabel();
}
}


function clearLabel(){
    document.getElementById("add_new_task").value = '';  
}

const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();



console.log(month);
console.log(day);