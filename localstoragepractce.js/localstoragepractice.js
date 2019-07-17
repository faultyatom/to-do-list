var createdList = [{ state: "not-done", text: "read a book" }, { state: "done", text: "write a novel" }, { state: "deleted", text: "sleep" }, { state: "done", text: "clean" }, { state: "done", text: "bvhjsd" }, { state: "deleted", text: "fkbfk" }, { state: "not-done", text: "usfjfbs" }, { state: "not-done", text: "vbdjcbd" }, { state: "not-done", text: "dry clothes" }, { state: "deleted", text: "wash utensils" }, { state: "done", text: "wash ceiling" }];

localStorage.setItem("myTesterList", JSON.stringify(createdList));
var previouslyCreatedList = localStorage.getItem("myTesterList");
console.log(previouslyCreatedList);

var doneTask = document.getElementById("done-task");
var deletedTask = document.getElementById("deleted-task");
var pendingTask = document.getElementById("pending-list");



function createPendingListElement(text, index) {
    var listElement = document.createElement("li");
    pendingTask.appendChild(listElement);
    var parentTaskDiv = document.createElement("div");
    listElement.appendChild(parentTaskDiv);
    var childTaskDiv = document.createElement("div");
    parentTaskDiv.appendChild(childTaskDiv);
    var taskTextPElement = document.createElement("p");
    childTaskDiv.appendChild(taskTextPElement);
    var textNode = document.createTextNode(text);
    taskTextPElement.appendChild(textNode);

    var markDoneButtonDiv = document.createElement("div");
    parentTaskDiv.appendChild(markDoneButtonDiv);
    var markDoneButton = document.createElement("button");
    markDoneButton.innerHTML = "done";
    markDoneButtonDiv.appendChild(markDoneButton);
    markDoneButton.classList.add("mark-done-delete-button");

    var markDeleteButtonDiv = document.createElement("div");
    parentTaskDiv.appendChild(markDeleteButtonDiv);
    var markDeleteButton = document.createElement("button");
    markDeleteButton.innerHTML = "delete";
    markDeleteButtonDiv.appendChild(markDeleteButton);
    markDeleteButton.classList.add("mark-done-delete-button");

    var recreatedListId = generatePendingListId(index);
    listElement.setAttribute("id", recreatedListId);
    listElement.setAttribute("data-index", index);

    var recreatedParentDivId = generateParentDivId(index);
    parentTaskDiv.setAttribute("id", recreatedParentDivId);
    parentTaskDiv.setAttribute("data-index", index);

    var recreatedMarkDoneDivId = generateMarkDoneButtonId(index);
    markDoneButtonDiv.setAttribute("id", recreatedMarkDoneDivId);
    markDoneButtonDiv.setAttribute("data-index", index);

    var recreatedMarkDoneButtonId = generateMarkDoneButtonId(index);
    markDoneButton.setAttribute("id", recreatedMarkDoneButtonId);
    markDoneButton.setAttribute("data-index", index);

    var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
    markDeleteButtonDiv.setAttribute("id", recreatedMarkDeleteButtonId);
    markDeleteButtonDiv.setAttribute("data-index", index);

    var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
    markDeleteButton.setAttribute("id", recreatedMarkDeleteButtonId);
    markDeleteButton.setAttribute("data-index", index);

    var recreatedTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTextId);
    taskTextPElement.setAttribute("data-index", index);

}
function createDoneListElement(text, index) {
    var listElement = document.createElement("li");
    doneTask.appendChild(listElement);
    var parentTaskDiv = document.createElement("div");
    listElement.appendChild(parentTaskDiv);
    var childTaskDiv = document.createElement("div");
    parentTaskDiv.appendChild(childTaskDiv);
    var taskTextPElement = document.createElement("p");
    childTaskDiv.appendChild(taskTextPElement);
    var textNode = document.createTextNode(text);
    taskTextPElement.appendChild(textNode);

    var recreatedListId = generatePendingListId(index);
    listElement.setAttribute("id", recreatedListId);
    listElement.setAttribute("data-index", index);

    var recreatedParentDivId = generateParentDivId(index);
    parentTaskDiv.setAttribute("id", recreatedParentDivId);
    parentTaskDiv.setAttribute("data-index", index);

    var recreatedTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTextId);
    taskTextPElement.setAttribute("data-index", index);
}

function createDeleteListElement(text, index) {
    var listElement = document.createElement("li");
    deletedTask.appendChild(listElement);
    var parentTaskDiv = document.createElement("div");
    listElement.appendChild(parentTaskDiv);
    var childTaskDiv = document.createElement("div");
    parentTaskDiv.appendChild(childTaskDiv);
    var taskTextPElement = document.createElement("p");
    childTaskDiv.appendChild(taskTextPElement);
    var textNode = document.createTextNode(text);
    taskTextPElement.appendChild(textNode);

    var recreatedListId = generatePendingListId(index);
    listElement.setAttribute("id", recreatedListId);
    listElement.setAttribute("data-index", index);

    var recreatedParentDivId = generateParentDivId(index);
    parentTaskDiv.setAttribute("id", recreatedParentDivId);
    parentTaskDiv.setAttribute("data-index", index);

    var recreatedTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTextId);
    taskTextPElement.setAttribute("data-index", index);
}

for (var i = 0; i < createdList.length; i++) {
    var currentTask = createdList[i];
    var currentTaskState = currentTask.state;
    var currentTaskText = currentTask.text;

    if (currentTaskState == "done") {
        createDoneListElement(currentTaskText, i)
    } else if (currentTaskState == "deleted") {
        createDeleteListElement(currentTaskText, i)
    } else {
        createPendingListElement(currentTaskText, i)
    } 
}

function generateTextTaskId(index) {
    var id = "text-task-" + index;
    return id;
}

function generateMarkDoneButtonId(index) {
    var id = "mark-done-" + index;
    return id;
}

function generateMarkDeleteButtonId(index) {
    var id = "mark-delete-" + index;
    return id;
}

function generateParentDivId(index) {
    var id = "parent-task-id-" + index;
    return id;
}
function generatePendingListId(index) {
    var id = "list-id-" + index;
    return id;
}

// for (var i = 0; i < createdList.length; i++) {
//     var currentTask = createdList[i];
//     var currentTaskState = currentTask.state;
//     var currentTaskText = currentTask.text;
//     var currentTaskTextNode = document.createTextNode(currentTaskText);

//     var parentTaskDiv = document.createElement("div");
//     var childTaskDiv = document.createElement("div");
//     var textListElement = document.createElement("li");
//     textListElement.appendChild(currentTaskTextNode);
//     childTaskDiv.appendChild(textListElement);
//     parentTaskDiv.appendChild(textListElement);

//     var markDoneButtonDiv = document.createElement("div");
//     var markDoneButton = document.createElement("button");
//     markDoneButton.innerHTML = "mark-done";
//     markDoneButton.classList.add("mark-done-delete-button");
//     markDoneButtonDiv.appendChild(markDoneButton);

//     var markDeleteButtonDiv = document.createElement("div");
//     var markDeleteButton = document.createElement("button");
//     markDeleteButton.innerHTML = "delete";
//     markDeleteButton.classList.add("mark-done-delete-button");
//     markDeleteButtonDiv.appendChild(markDeleteButton);

//     if (currentTaskState == "done") {
//         doneTask.appendChild(parentTaskDiv);
//     } else if (currentTaskState == "deleted") {
//         deletedTask.appendChild(parentTaskDiv);
//     } else {
//         pendingTask.appendChild(parentTaskDiv);
//         parentTaskDiv.appendChild(markDoneButtonDiv);
//         parentTaskDiv.appendChild(markDeleteButtonDiv);
//     }
// }
// function createPendingListElement(text, index) {
//     var listElement = document.createElement("li");
//     pendingTask.appendChild(listElement); 
//     var parentTaskDiv = document.createElement("div");
//     listElement.appendChild(parentTaskDiv);
//     var childTaskDiv = document.createElement("div");
//     parentTaskDiv.appendChild(childTaskDiv);
//     var taskTextPElement = document.createElement("p");
//     childTaskDiv.appendChild(taskText);
//     var textNode = document.createTextNode(text);
//     taskTextPElement.appendChild(textNode);
//     textNode = currentTaskText; 
// }

//