function createTask(text) {
    var taskToDo = { state: "not done", text: text, timeAdded: Date.now() };
    return taskToDo;
}

function createList() {
    var list = [];
    return list;
}

function createDoneUi(index) {
    var currentTaskText = createdList[index].text;
    var doneTask = document.getElementById("done-task-list");
    var doneTaskListElement = document.createElement("li");
    doneTask.appendChild(doneTaskListElement);
    var doneTaskDiv = document.createElement("div");
    doneTaskListElement.appendChild(doneTaskDiv);
    var taskTextPElement = document.createElement("p");
    doneTaskDiv.appendChild(taskTextPElement);
    var doneTaskTextNode = document.createTextNode(currentTaskText);
    taskTextPElement.appendChild(doneTaskTextNode);

    var undoButtonDiv = document.createElement("div");
    doneTaskListElement.appendChild(undoButtonDiv);
    var undoButton = document.createElement("button");
    undoButtonDiv.appendChild(undoButton);
    undoButton.innerHTML = "Undo";
    undoButton.onclick = undoDoneOnclick;

    var deleteButtonDiv = document.createElement("div");
    doneTaskListElement.appendChild(deleteButtonDiv);
    var deleteButton = document.createElement("button");
    deleteButtonDiv.appendChild(deleteButton);
    deleteButton.innerHTML = "delete";
    deleteButton.onclick = markDeleteWhenDoneOnClick;

    var recreatedMarkDeleteButtonDivId = generateMarkDeleteButtonId(index);
    deleteButtonDiv.setAttribute("id", recreatedMarkDeleteButtonDivId);
    deleteButtonDiv.setAttribute("data-index", index);
    var recreatedMarkDeleteButtonId = generateMarkDeleteButtonId(index);
    deleteButton.setAttribute("id", recreatedMarkDeleteButtonId);
    deleteButton.setAttribute("data-index", index);
    doneTaskListElement.appendChild(deleteButtonDiv); 

    var recreatedUndoButtonDivId = generateUndoButtonId(index);
    undoButtonDiv.setAttribute("id", recreatedUndoButtonDivId);
    undoButtonDiv.setAttribute("data-index", index);
    var recreatedUndoButtonId = generateUndoButtonId(index);
    undoButton.setAttribute("id", recreatedUndoButtonId);
    undoButton.setAttribute("data-index", index);

    var recreatedListId = generateListId(index);
    doneTaskListElement.setAttribute("id", recreatedListId);
    doneTaskListElement.setAttribute("data-index", index);

    var recreatedParentDivId = generateParentDivId(index);
    doneTaskDiv.setAttribute("id", recreatedParentDivId);
    doneTaskDiv.setAttribute("data-index", index);

    var recreatedTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTextId);
    taskTextPElement.setAttribute("data-index", index);

    undoButton.classList.add("button-styling");
    deleteButton.classList.add("button-styling");
    taskTextPElement.classList.add("done-task");
    doneTaskDiv.classList.add("task-text-styling");
    doneTaskDiv.classList.add("wrap-text");
    doneTaskDiv.classList.add("col-9");
} 

function createDeleteUi(index) {
    var currentTaskText = createdList[index].text;
    var deletedTask = document.getElementById("deleted-task-list");
    var deletedListElement = document.createElement("li");
    deletedTask.appendChild(deletedListElement);
    var deletedTaskDiv = document.createElement("div");
    deletedListElement.appendChild(deletedTaskDiv);
    var taskTextPElement = document.createElement("p");
    deletedTaskDiv.appendChild(taskTextPElement);
    var textNode = document.createTextNode(currentTaskText);
    taskTextPElement.appendChild(textNode);

    var undoButtonDiv = document.createElement("div");
    deletedListElement.appendChild(undoButtonDiv);
    var undoButton = document.createElement("button");
    undoButtonDiv.appendChild(undoButton);
    undoButton.innerHTML = "Undo";
    undoButton.onclick = undoDeleteOnclick;

    var doneButtonDiv = document.createElement("div");
    deletedListElement.appendChild(doneButtonDiv);
    var doneButton = document.createElement("button");
    doneButtonDiv.appendChild(doneButton);
    doneButton.innerHTML = "Done";
    doneButton.classList.add("button-styling"); 
    doneButton.onclick = markDoneOnclick; 

    var recreatedDoneButtonDivId = generateMarkDoneButtonId(index); 
    doneButtonDiv.setAttribute("id", recreatedDoneButtonDivId);
    doneButtonDiv.setAttribute("data-index", index);

    var recreatedDoneButtonId = generateMarkDoneButtonId(index);
    doneButton.setAttribute("id", recreatedDoneButtonId);
    doneButton.setAttribute("data-index", index); 

    var recreatedUndoButtonDivId = generateUndoButtonId(index);
    undoButtonDiv.setAttribute("id", recreatedUndoButtonDivId);
    undoButtonDiv.setAttribute("data-index", index);

    var recreatedUndoButtonId = generateUndoButtonId(index);
    undoButton.setAttribute("id", recreatedUndoButtonId);
    undoButton.setAttribute("data-index", index);

    var recreatedListId = generateListId(index);
    deletedListElement.setAttribute("id", recreatedListId);
    deletedListElement.setAttribute("data-index", index);

    var recreatedParentDivId = generateParentDivId(index);
    deletedTaskDiv.setAttribute("id", recreatedParentDivId);
    deletedTaskDiv.setAttribute("data-index", index);

    var recreatedTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTextId);
    taskTextPElement.setAttribute("data-index", index);

    undoButton.classList.add("button-styling");
    deletedTaskDiv.classList.add("task-text-styling");
    deletedTaskDiv.classList.add("wrap-text");
    deletedTaskDiv.classList.add("col-9");
}

function createPendingUi(index) {
    var currentTaskText = createdList[index].text;
    var pendingTask = document.getElementById("hold-my-pending-list")
    var listElement = document.createElement("li");
    var recreatedListId = generateListId(index);
    listElement.setAttribute("id", recreatedListId);
    listElement.setAttribute("data-index", index);
    pendingTask.appendChild(listElement);

    var parentTaskDiv = document.createElement("div");
    listElement.appendChild(parentTaskDiv);
    var recreatedParentDivId = generateParentDivId(index);
    parentTaskDiv.setAttribute("id", recreatedParentDivId);
    parentTaskDiv.setAttribute("data-index", index);
    var childTaskDiv = document.createElement("div");
    parentTaskDiv.appendChild(childTaskDiv);
    var recreatedTextId = generateTextTaskId(index);
    childTaskDiv.setAttribute("id", recreatedTextId);
    childTaskDiv.setAttribute("data-index", index);
    var taskTextPElement = document.createElement("p");
    childTaskDiv.appendChild(taskTextPElement);
    var textNode = document.createTextNode(currentTaskText);
    taskTextPElement.appendChild(textNode);

    var markDoneButtonDiv = document.createElement("div");
    parentTaskDiv.appendChild(markDoneButtonDiv);
    var markDoneButton = document.createElement("button");
    markDoneButton.innerHTML = "&#10003";
    markDoneButtonDiv.appendChild(markDoneButton);
    markDoneButton.onclick = markDoneOnclick;
    markDoneButton.classList.add("mark-done-delete-button");

    var markDeleteButtonDiv = document.createElement("div");
    parentTaskDiv.appendChild(markDeleteButtonDiv);
    var markDeleteButton = document.createElement("button");
    markDeleteButton.onclick = deleteButtonOnclick;
    markDeleteButton.innerHTML = "&#10007";
    markDeleteButtonDiv.appendChild(markDeleteButton);
    markDeleteButton.classList.add("mark-done-delete-button");

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

    parentTaskDiv.classList.add("row");
    childTaskDiv.classList.add("col-9");
    childTaskDiv.classList.add("task-text-styling");
    childTaskDiv.classList.add("wrap-text");
    markDoneButtonDiv.classList.add("col-1");
    markDoneButton.classList.add("button-styling");
    markDeleteButtonDiv.classList.add("col-1");
    markDeleteButton.classList.add("button-styling");
}
function updateStateAndCreateUi(currentTask, newState, createdList, index) {
    // 1. Delete existing UI
    // 2. Update state
    // 3. Create new UI for new state
    if (currentTask.state === "not done") {
        removePendingTaskUi(index);
    } else if (currentTask.state === "done") {
        removeDoneTaskUi(index);

    } else if (currentTask.state === "deleted") {
        removeDeletedTaskUi(index);
    }
    currentTask.state = newState;

    if (newState === "done") {
        createDoneUi(index);
    } else if (newState === "deleted") {
        createDeleteUi(index);
    } else if (newState === "not done") {
        createPendingUi(index);
    }

    createdList[index] = currentTask;
    localStorage.setItem("list", JSON.stringify(createdList));
    return createdList;
}

var previouslySavedList = JSON.parse(localStorage.getItem("list"));
console.log(previouslySavedList);
var createdList;
if (previouslySavedList !== null) {
    createdList = previouslySavedList;
    myInitialUi(createdList);
} else {
    createdList = createList();
}

function myInitialUi(createdList) {
    for (var i = 0; i < createdList.length; i++) {
        var currentTask = createdList[i];
        var currentTaskState = currentTask.state;
        updateStateAndCreateUi(currentTask, currentTaskState, createdList, i);
    }
}

function addTaskToList(previouslyCreatedList, taskToBeAdded) {
    previouslyCreatedList.push(taskToBeAdded);
    return previouslyCreatedList;
}

function addTask(text, createdList) {
    var createdTask = createTask(text);
    var list = addTaskToList(createdList, createdTask);
    return list;
}

for (var i = 0; i < createdList.length; i++) {
    var currentTask = createdList[i];
    var currentTaskText = currentTask.text;
    console.log(currentTaskText);
}

var submitButton = document.getElementById("submit-button");

function submitButtonOnclick(event) {
    var myInputField = document.getElementById("add-task-input");
    var textUserHasEntered = myInputField.value;
    textUserHasEntered = textUserHasEntered.trim();
    var hiddenText = document.getElementById("hide-my-text");
    hiddenText.style.visibility = "hidden";

    if (textUserHasEntered.length == 0) {
        hiddenText.style.visibility = "visible";
    } else {
        createdList = addTask(textUserHasEntered, createdList);
        var i = createdList.length - 1;
        currentTaskState = createdList[i].state;
        localStorage.setItem("list", JSON.stringify(createdList));
        updateStateAndCreateUi(textUserHasEntered, currentTaskState, createdList, i);
    }

    console.log(createdList);
    myInputField.value = '';
}

submitButton.onclick = submitButtonOnclick;

function removePendingTaskUi(index) {
    var pendingListId = generateListId(index);
    var fetchPendingListId = document.getElementById(pendingListId);
    if (fetchPendingListId === null) {
        // I have not created any UI for this yet
        // therefore I don't need to delete it
        // therefore do nothing
    } else {
        var pendingList = document.getElementById("hold-my-pending-list");
        pendingList.removeChild(fetchPendingListId);
    }
}

function removeDoneTaskUi(index) {
    var doneTaskId = generateListId(index);
    var doneTaskToRemove = document.getElementById(doneTaskId);
    if (doneTaskToRemove === null) {

    } else {
        var doneListItem = document.getElementById("done-task-list");
        doneListItem.removeChild(doneTaskToRemove);
    }
    // var doneListItem = document.getElementById("done-task-list");
    // doneListItem.removeChild(doneTaskToRemove);
}

function removeDeletedTaskUi(index) {
    var deleteTaskId = generateListId(index);
    var deletedTaskToRemove = document.getElementById(deleteTaskId);
    if (deletedTaskToRemove === null) {

    } else {
        var deletedListItem = document.getElementById("deleted-task-list");
        deletedListItem.removeChild(deletedTaskToRemove);
    }
    // var deletedListItem = document.getElementById("deleted-task-list");
    // deletedListItem.removeChild(deletedTaskToRemove);
}

function updateUiOnClick(event, newState) {
    var elementThatWasClicked = event.target;
    var indexOfTask = elementThatWasClicked.getAttribute("data-index");
    var currentTask = createdList[indexOfTask];
    createdList = updateStateAndCreateUi(currentTask, newState, createdList, indexOfTask);
}

function undoDoneOnclick(event) {
    updateUiOnClick(event, "not done");
}

function undoDeleteOnclick(event) {
    updateUiOnClick(event, "not done");
}

function markDoneOnclick(event) {
    updateUiOnClick(event, "done");
}

function deleteButtonOnclick(event) {
    updateUiOnClick(event, "deleted");
}

function markDeleteWhenDoneOnClick(event) {
    updateUiOnClick(event, "deleted");
}

function generateTextTaskId(index) {
    var id = "text-task-" + index;
    return id;
}

function generateUndoButtonId(index) {
    var id = "undo-" + index;
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
function generateListId(index) {
    var id = "list-id-" + index;
    return id;
}



// Test Cases:

// 1. When there is already a list in the local storage, the page will create initial UI. 
// 2. When local storage is empty, the page will not create any initial UI.
// 3. HTML structure of newly added items and pre-existing items will be the same. 
// 4. When mark-done/delete is clicked on pre existing items in the pending list, it will-
//     4.1 Remove the pending list and append it to the done/deleted list.
//     4.2 Remove the mark-done/delete buttons of the task from the pending list. 
// 5. The structure of the items from pre-existing list when appended to the done/deleted list is the same as the items added from the newly added items. 
// 6. When there are six items in the local storage, they will be appended to their respective columns in an ordered list on the basis of their state - not-done, done and deleted. 
//     6.1 If state is undefined, then the task will be pushed to the pending list.
//     6.2 If there is spelling error in the state, it will be pushed to the pending list. 
//     6.3 If the state is empty, it will be pushed to the pending list. 
//     6.4 If there is no text, it will show a text saying no text-input has been added.  
//     6.5 If all items in local storage have the state of done, they will all be added to the done column. Pending and deleted lists will be            empty. 
//     6.6 If there are only pending items in the list, it will only show the pending list. Done and deleted lists will be empty. 
//     6.7 If there are only deleted items in the list, it will only show te deleted list. Done and pending lists will be empty.  
// 7. When there is a really long sentence, the text will wrap in all the columns irrespective of whether they are added from local storage or if they are newly added items 
// 8. When the Submit button is clicked, but there is no text-input, a text saying input field is empty will be displayed
// 9. When numbers are typed in the input field, they will also be added to the pending list 
// 10. When submit button is clicked:
//     10.1 it will append the text to the pending list with the mark done/delete buttons
//     10.2 the input field will become empty once the button is clicked 
// 11. When Undo button is clicked, 