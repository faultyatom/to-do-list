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

// function updateState(index, createdList){
//     taskStateToUpdate = createdList[index]; 
//     if (markDone.onclick){
//         taskStateToUpdate.state = "done"
//     }

// }
// function updateState(createdList) {
//     for (var index = 0; index < createdList.length; index++) {
//         var currentTask = createdList[index];
//         var currentTaskState = currentTask.state; 
//         var currentTaskText = currentTask.text;

//         if (currentTaskState == "done") {
//             var doneTask = document.getElementById("done-task-list");
//             var doneTaskListElement = document.createElement("li"); 
//             doneTask.appendChild(doneTaskListElement);
//             var doneTaskDiv = document.createElement("div");
//             doneTaskListElement.appendChild(doneTaskDiv); 
//             var taskTextPElement = document.createElement("p"); 
//             doneTaskDiv.appendChild(taskTextPElement);
//             var doneTaskTextNode = document.createTextNode(currentTaskText); 
//             taskTextPElement.appendChild(doneTaskTextNode);

//             var recreatedListId = generatePendingListId(index);
//             doneTaskListElement.setAttribute("id", recreatedListId);
//             doneTaskListElement.setAttribute("data-index", index);

//             var recreatedParentDivId = generateParentDivId(index);
//             doneTaskDiv.setAttribute("id", recreatedParentDivId);
//             doneTaskDiv.setAttribute("data-index", index);

//             var recreatedTextId = generateTextTaskId(index);
//             taskTextPElement.setAttribute("id", recreatedTextId);
//             taskTextPElement.setAttribute("data-index", index);

//             taskTextPElement.classList.add("done-task");
//             doneTaskDiv.classList.add("task-text-styling");
//             doneTaskDiv.classList.add("wrap-text");
//             doneTaskDiv.classList.add("col-9");

//         } else if (currentTaskState == "deleted") {
//             var deletedTask = document.getElementById("deleted-task-list"); 
//             var deletedListElement = document.createElement("li");
//             deletedTask.appendChild(deletedListElement);
//             var deletedTaskDiv = document.createElement("div");
//             deletedListElement.appendChild(deletedTaskDiv);
//             var taskTextPElement = document.createElement("p");
//             deletedTaskDiv.appendChild(taskTextPElement);
//             var textNode = document.createTextNode(currentTaskText);
//             taskTextPElement.appendChild(textNode);

//             var recreatedListId = generatePendingListId(index);
//             deletedListElement.setAttribute("id", recreatedListId);
//             deletedListElement.setAttribute("data-index", index);

//             var recreatedParentDivId = generateParentDivId(index);
//             deletedTaskDiv.setAttribute("id", recreatedParentDivId);
//             deletedTaskDiv.setAttribute("data-index", index);

//             var recreatedTextId = generateTextTaskId(index);
//             taskTextPElement.setAttribute("id", recreatedTextId);
//             taskTextPElement.setAttribute("data-index", index);

//             deletedTaskDiv.classList.add("task-text-styling");
//             deletedTaskDiv.classList.add("wrap-text");
//             deletedTaskDiv.classList.add("col-9");

//         } else {
//             var pendingTask = document.getElementById("hold-my-pending-list")
//             var listElement = document.createElement("li");
//             var recreatedListId = generatePendingListId(index);
//             listElement.setAttribute("id", recreatedListId);
//             listElement.setAttribute("data-index", index);
//             pendingTask.appendChild(listElement);

//             var parentTaskDiv = document.createElement("div");
//             listElement.appendChild(parentTaskDiv);
//             var recreatedParentDivId = generateParentDivId(index);
//             parentTaskDiv.setAttribute("id", recreatedParentDivId);
//             parentTaskDiv.setAttribute("data-index", index);
//             var childTaskDiv = document.createElement("div");
//             parentTaskDiv.appendChild(childTaskDiv);
//             var recreatedTextId = generateTextTaskId(index);
//             childTaskDiv.setAttribute("id", recreatedTextId);
//             childTaskDiv.setAttribute("data-index", index);
//             var taskTextPElement = document.createElement("p");
//             childTaskDiv.appendChild(taskTextPElement);
//             var textNode = document.createTextNode(currentTaskText);
//             taskTextPElement.appendChild(textNode);

//             var markDoneButtonDiv = document.createElement("div");
//             parentTaskDiv.appendChild(markDoneButtonDiv);
//             var markDoneButton = document.createElement("button");
//             markDoneButton.innerHTML = "&#10003";
//             markDoneButtonDiv.appendChild(markDoneButton);
//             markDoneButton.onclick = markDoneOnclick;
//             markDoneButton.classList.add("mark-done-delete-button");

//             var markDeleteButtonDiv = document.createElement("div");
//             parentTaskDiv.appendChild(markDeleteButtonDiv);
//             var markDeleteButton = document.createElement("button");
//             markDeleteButton.onclick = deleteButtonOnclick;
//             markDeleteButton.innerHTML = "&#10007";
//             markDeleteButtonDiv.appendChild(markDeleteButton);
//             markDeleteButton.classList.add("mark-done-delete-button");

//             var recreatedMarkDoneDivId = generateMarkDoneButtonId(index);
//             markDoneButtonDiv.setAttribute("id", recreatedMarkDoneDivId);
//             markDoneButtonDiv.setAttribute("data-index", index);
//             var recreatedMarkDoneButtonId = generateMarkDoneButtonId(index);
//             markDoneButton.setAttribute("id", recreatedMarkDoneButtonId);
//             markDoneButton.setAttribute("data-index", index);

//             var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
//             markDeleteButtonDiv.setAttribute("id", recreatedMarkDeleteButtonId);
//             markDeleteButtonDiv.setAttribute("data-index", index);
//             var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
//             markDeleteButton.setAttribute("id", recreatedMarkDeleteButtonId);
//             markDeleteButton.setAttribute("data-index", index);

//             var recreatedTextId = generateTextTaskId(index);
//             taskTextPElement.setAttribute("id", recreatedTextId);
//             taskTextPElement.setAttribute("data-index", index);

//             parentTaskDiv.classList.add("row");
//             childTaskDiv.classList.add("col-9");
//             childTaskDiv.classList.add("task-text-styling");
//             childTaskDiv.classList.add("wrap-text");
//             markDoneButtonDiv.classList.add("col-1");
//             markDoneButton.classList.add("button-styling");
//             markDeleteButtonDiv.classList.add("col-1");
//             markDeleteButton.classList.add("button-styling"); 
//         } 
//     }
// } 
// function createPendingListElement(text, index) {
//     var pendingTask = document.getElementById("hold-my-pending-list")
//     var listElement = document.createElement("li");
//     var recreatedListId = generatePendingListId(index);
//     listElement.setAttribute("id", recreatedListId);
//     listElement.setAttribute("data-index", index);
//     pendingTask.appendChild(listElement);

//     var parentTaskDiv = document.createElement("div");
//     listElement.appendChild(parentTaskDiv);
//     var recreatedParentDivId = generateParentDivId(index);
//     parentTaskDiv.setAttribute("id", recreatedParentDivId);
//     parentTaskDiv.setAttribute("data-index", index);
//     var childTaskDiv = document.createElement("div");
//     parentTaskDiv.appendChild(childTaskDiv);
//     var recreatedTextId = generateTextTaskId(index);
//     childTaskDiv.setAttribute("id", recreatedTextId);
//     childTaskDiv.setAttribute("data-index", index); 
//     var taskTextPElement = document.createElement("p");
//     childTaskDiv.appendChild(taskTextPElement);
//     var textNode = document.createTextNode(text);
//     taskTextPElement.appendChild(textNode);

//     var markDoneButtonDiv = document.createElement("div");
//     parentTaskDiv.appendChild(markDoneButtonDiv);
//     var markDoneButton = document.createElement("button");
//     markDoneButton.innerHTML = "&#10003";
//     markDoneButtonDiv.appendChild(markDoneButton);
//     markDoneButton.onclick = markDoneOnclick;
//     markDoneButton.classList.add("mark-done-delete-button");

//     var markDeleteButtonDiv = document.createElement("div");
//     parentTaskDiv.appendChild(markDeleteButtonDiv);
//     var markDeleteButton = document.createElement("button");
//     markDeleteButton.onclick = deleteButtonOnclick;
//     markDeleteButton.innerHTML = "&#10007";
//     markDeleteButtonDiv.appendChild(markDeleteButton);
//     markDeleteButton.classList.add("mark-done-delete-button");

//     var recreatedMarkDoneDivId = generateMarkDoneButtonId(index);
//     markDoneButtonDiv.setAttribute("id", recreatedMarkDoneDivId);
//     markDoneButtonDiv.setAttribute("data-index", index);
//     var recreatedMarkDoneButtonId = generateMarkDoneButtonId(index);
//     markDoneButton.setAttribute("id", recreatedMarkDoneButtonId);
//     markDoneButton.setAttribute("data-index", index);

//     var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
//     markDeleteButtonDiv.setAttribute("id", recreatedMarkDeleteButtonId);
//     markDeleteButtonDiv.setAttribute("data-index", index);
//     var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
//     markDeleteButton.setAttribute("id", recreatedMarkDeleteButtonId);
//     markDeleteButton.setAttribute("data-index", index);

//     var recreatedTextId = generateTextTaskId(index);
//     taskTextPElement.setAttribute("id", recreatedTextId);
//     taskTextPElement.setAttribute("data-index", index);

//     parentTaskDiv.classList.add("row");
//     childTaskDiv.classList.add("col-9");
//     childTaskDiv.classList.add("task-text-styling");
//     childTaskDiv.classList.add("wrap-text");
//     markDoneButtonDiv.classList.add("col-1");
//     markDoneButton.classList.add("button-styling");
//     markDeleteButtonDiv.classList.add("col-1");
//     markDeleteButton.classList.add("button-styling");
// }
// function createDoneListElement(text, index) {
//     var doneTask = document.getElementById("done-task-list");
//     var doneTaskListElement = document.createElement("li");
//     doneTask.appendChild(doneTaskListElement);
//     var doneTaskDiv = document.createElement("div");
//     doneTaskListElement.appendChild(doneTaskDiv);
//     var taskTextPElement = document.createElement("p");
//     doneTaskDiv.appendChild(taskTextPElement);
//     var doneTaskTextNode = document.createTextNode(text);
//     taskTextPElement.appendChild(doneTaskTextNode);

//     var recreatedListId = generatePendingListId(index);
//     doneTaskListElement.setAttribute("id", recreatedListId);
//     doneTaskListElement.setAttribute("data-index", index);

//     var recreatedParentDivId = generateParentDivId(index);
//     doneTaskDiv.setAttribute("id", recreatedParentDivId);
//     doneTaskDiv.setAttribute("data-index", index);

//     var recreatedTextId = generateTextTaskId(index);
//     taskTextPElement.setAttribute("id", recreatedTextId);
//     taskTextPElement.setAttribute("data-index", index);

//     taskTextPElement.classList.add("done-task");
//     doneTaskDiv.classList.add("task-text-styling");
//     doneTaskDiv.classList.add("wrap-text");
//     doneTaskDiv.classList.add("col-9");
// } 
// function createDeleteListElement(text, index) {
//     var deletedTask = document.getElementById("deleted-task-list");
//     var deletedListElement = document.createElement("li");
//     deletedTask.appendChild(deletedListElement);
//     var deletedTaskDiv = document.createElement("div");
//     deletedListElement.appendChild(deletedTaskDiv);
//     var taskTextPElement = document.createElement("p");
//     deletedTaskDiv.appendChild(taskTextPElement);
//     var textNode = document.createTextNode(text);
//     taskTextPElement.appendChild(textNode);

//     var recreatedListId = generatePendingListId(index);
//     deletedListElement.setAttribute("id", recreatedListId);
//     deletedListElement.setAttribute("data-index", index);

//     var recreatedParentDivId = generateParentDivId(index);
//     deletedTaskDiv.setAttribute("id", recreatedParentDivId);
//     deletedTaskDiv.setAttribute("data-index", index);

//     var recreatedTextId = generateTextTaskId(index);
//     taskTextPElement.setAttribute("id", recreatedTextId);
//     taskTextPElement.setAttribute("data-index", index);

//     deletedTaskDiv.classList.add("task-text-styling");
//     deletedTaskDiv.classList.add("wrap-text");
//     deletedTaskDiv.classList.add("col-9");
// }
