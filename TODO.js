var elementname;
document.querySelector("#task-add-popup-btn").addEventListener("click", () => {
    document.querySelector(".container").style.filter = "blur(6px)";
    document.querySelector("#task-add").style.visibility = "visible";
})

function closepopup() {
    document.querySelector(".container").style.filter = "blur(0px)";
    document.querySelector("#task-add").style.visibility = "hidden";
    document.querySelector("#task-add-item").style.visibility = "hidden";
}
document.querySelector("#addpopupbutton").addEventListener("click", () => {
    closepopup();
    var node = document.createElement("div");
    var inputval = document.querySelector("#input-task").value;
    node.setAttribute("class", "card");
    node.setAttribute("id", Date.now());
    console.log(inputval);
    console.log(node.id);
    node.innerHTML = `<div class="card-heading">
    <p class="task-name">${inputval}</p>
    <hr>
    </div>
    <div class="task-description">
    </div>
    <div class="task-add-delete-button">
        <button class="delete-button" onclick="deletethiscard(this)">
            <i class="fa fa-trash fa-custom"></i>
        </button>
        <button class="add-taskitem-button"onclick="addtaskitemonthiscard(this)">
            <i class="fa fa-plus fa-custom"></i>
        </button>
    </div>`
    document.querySelector(".card-container").appendChild(node);
})

function deletethiscard(Element) {
    var parent_id = Element.parentNode.parentNode.id;
    var parent_card = document.getElementById(parent_id);
    console.log(parent_id);
    console.log(parent_card);
    document.querySelector(".card-container").removeChild(parent_card);
}

function addtaskitemonthiscard(addbuttonid) {
    elementname = addbuttonid;
    document.querySelector(".container").style.filter = "blur(6px)";
    document.querySelector("#task-add-item").style.visibility = "visible";
}
document.querySelector("#add-task-item-btn").addEventListener("click", () => {
    var inputval = document.querySelector("#input-taskitem").value;
    var node = document.createElement("div");
    node.setAttribute("class", "task");
    node.setAttribute("id", Date.now());
    var ID = elementname.parentNode.parentNode.id;
    node.innerHTML = `<span class="sub-task">${inputval}</span><button class="complete-this-task"onclick="completethistask(this)">Mark Done</button>`
    var card = document.getElementById(ID);
    card.querySelector(".task-description").appendChild(node);
    closepopup();
})

function completethistask(taskname) {
    var ID = taskname.parentNode.id;
    var subtask = document.getElementById(ID);
    subtask.querySelector(".complete-this-task").style.visibility = "hidden";
    subtask.querySelector(".sub-task").style.color = "red";
    subtask.querySelector(".sub-task").style.textDecoration = "line-through";
    subtask.querySelector(".sub-task").style.textalign = "center";
}