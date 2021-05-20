var elementname;
var todoitems = [];
var thiscard;
var flag = 0;
document.querySelector("#task-add-popup-btn").addEventListener("click", () => {
    document.querySelector(".container").style.filter = "blur(6px)";
    document.querySelector("#task-add").style.visibility = "visible";
})


function closepopup() {
    if (flag == 1) {
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector(".fixed-task").style.visibility = "hidden";
        for (let i = 0; i < todoitems.length; i++) {
            document.querySelector(".container").querySelector(".card-container").appendChild(todoitems[i]);
        }
        var pos = document.querySelector(".container");
        var node = document.querySelector(".card-container");
        for (let i = 1; i < node.childNodes.length; i++) {
            node.childNodes[i].childNodes[0].childNodes[1].style.cursor = "pointer";
        }
        flag = 0;
    } else if (flag == 0) {
        let n = todoitems.length - 1;
        document.querySelector(".container").querySelector(".card-container").appendChild(todoitems[n]);
    }
    document.querySelector(".container").style.filter = "blur(0px)";
    document.querySelector("#task-add").style.visibility = "hidden";
    document.querySelector("#task-add-item").style.visibility = "hidden";
    document.querySelector(".fixed-task").style.filter = "blur(0px)";
}

function closepopupitem() {
    if (flag == 1) {
        document.querySelector(".fixed-task").style.filter = "blur(0px)";
    } else if (flag == 0) {
        document.querySelector(".container").style.filter = "blur(0px)";
    }
    document.querySelector("#task-add").style.visibility = "hidden";
    document.querySelector("#task-add-item").style.visibility = "hidden";
}

function onlythiscard(element) {
    if (flag == 0) {
        var headingnode = document.querySelector(".card-title-heading");
        while (headingnode.firstChild) {
            headingnode.removeChild(headingnode.firstChild);
        }
        document.querySelector(".fixed-task").style.visibility = "visible";
        document.querySelector(".container").style.visibility = "hidden";
        var pos = document.querySelector(".fixed-task");
        var divele = pos.querySelector(".card-container");
        console.log(element.textContent);
        console.log(element);
        console.log(pos.childNodes[1].childNodes[3]);
        var node = document.createElement("p");
        node.setAttribute("class", "heading-task");
        node.setAttribute("id", Date.now());
        node.innerHTML = `${element.textContent}`
        pos.querySelector(".card-title-heading").appendChild(node);
        divele.appendChild(element.parentNode.parentNode);
        thiscard = element.parentNode.parentNode;
        element.style.cursor = "auto";
        flag = 1;
    }
}
document.querySelector("#btn-back").addEventListener("click", () => {
    flag = 0;
    var pos = document.querySelector(".container");
    var node = pos.querySelector(".card-container");
    var headingnode = document.querySelector(".card-title-heading");
    while (headingnode.firstChild) {
        headingnode.removeChild(headingnode.firstChild);
    }
    for (let i = 0; i < todoitems.length; i++) {
        node.appendChild(todoitems[i]);
    }
    document.querySelector(".fixed-task").style.visibility = "hidden";
    document.querySelector(".container").style.visibility = "visible";
    console.log(node.childNodes[1].childNodes);
    for (let i = 1; i < node.childNodes.length; i++) {
        node.childNodes[i].childNodes[0].childNodes[1].style.cursor = "pointer";
    }
})
document.querySelector("#addpopupbutton").addEventListener("click", () => {
    var node = document.createElement("div");
    var inputval = document.querySelector("#input-task").value;
    node.setAttribute("class", "card");
    node.setAttribute("id", Date.now());
    console.log(inputval);
    console.log(node.id);
    node.innerHTML = `<div class="card-heading">
    <p class="task-name" onclick="onlythiscard(this)">${inputval}</p>
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
        /*var nodval = document.querySelector(".container");
        nodval.querySelector(".card-container").appendChild(node);*/
    todoitems.push(node);
    closepopup();
    if (todoitems.length > 0) {
        document.querySelector(".NoIteminTodo").style.visibility = "hidden";
    } else if (todoitems.length == 0) {
        document.querySelector(".NoIteminTodo").style.visibility = "visible";
    }
})

function deletethiscard(Element) {
    var parent_id = Element.parentNode.parentNode.id;
    for (let i = 0; i < todoitems.length; i++) {
        if (todoitems[i].id == parent_id) {
            todoitems.splice(i, 1);
            break;
        }
    }
    var parent_card = document.getElementById(parent_id);
    console.log(parent_id);
    console.log(parent_card);
    console.log(flag);
    if (flag == 1) {
        var pos = document.querySelector(".container");
        var node = pos.querySelector(".card-container");
        var headingnode = document.querySelector(".card-title-heading");
        while (headingnode.firstChild) {
            headingnode.removeChild(headingnode.firstChild);
        }
        var divi = document.querySelector(".fixed-task");
        var divele = divi.querySelector(".card-container");
        while (divele.firstChild) {
            divele.removeChild(divele.firstChild);
        }
        for (let i = 0; i < todoitems.length; i++) {
            node.appendChild(todoitems[i]);
        }
        pos.style.visibility = "visible";
        document.querySelector(".fixed-task").style.visibility = "hidden";
        flag = 0;
        for (let i = 1; i < node.childNodes.length; i++) {
            node.childNodes[i].childNodes[0].childNodes[1].style.cursor = "pointer";
        }
    } else if (flag == 0) {
        var pos = document.querySelector(".container");
        var node = pos.querySelector(".card-container");
        node.removeChild(parent_card);
    }
    if (todoitems.length > 0) {
        document.querySelector(".NoIteminTodo").style.visibility = "hidden";
    } else if (todoitems.length == 0) {
        document.querySelector(".NoIteminTodo").style.visibility = "visible";
    }
}

function addtaskitemonthiscard(addbuttonid) {
    elementname = addbuttonid;
    if (flag == 1) {
        document.querySelector(".fixed-task").style.filter = "blur(6px)";
    } else if (flag == 0) {
        document.querySelector(".container").style.filter = "blur(6px)";
    }
    document.querySelector("#task-add-item").style.visibility = "visible";
}

document.querySelector("#add-task-item-btn").addEventListener("click", () => {
    var inputval = document.querySelector("#input-taskitem").value;
    var node = document.createElement("div");
    node.setAttribute("class", "task");
    node.setAttribute("id", Date.now());
    var ID = elementname.parentNode.parentNode.id;
    node.innerHTML = `<div class="sub-task-holder">
    <span class="sub-task">${inputval}</span><button class="complete-this-task"onclick="completethistask(this)">Mark Done</button>
    </div>`
    var card = document.getElementById(ID);
    card.querySelector(".task-description").appendChild(node);
    if (flag == 1) {
        document.querySelector(".fixed-task").style.filter = "blur(0px)";
        document.querySelector("#task-add-item").style.visibility = "hidden";
    } else if (flag == 0) {
        document.querySelector(".container").style.filter = "blur(0px)";
        document.querySelector("#task-add-item").style.visibility = "hidden";
    }
})

function completethistask(taskname) {
    var ID = taskname.parentNode.parentNode.id;
    var subtask = document.getElementById(ID);
    subtask.querySelector(".complete-this-task").style.visibility = "hidden";
    subtask.querySelector(".sub-task").style.color = "red";
    subtask.querySelector(".sub-task").style.textDecoration = "line-through";
}
document.querySelector("#buttonaddval").addEventListener("click", () => {
    var divi = document.querySelector(".fixed-task");
    var divele = divi.querySelector(".card-container");
    console.log(thiscard);
    document.querySelector(".fixed-task").style.filter = "blur(6px)";
    document.querySelector("#task-add").style.visibility = "visible";
})
