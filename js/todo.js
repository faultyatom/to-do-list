function createTask(text) {
    var taskToDo = { state: "not done", text: text, timeAdded: Date.now() };
    return taskToDo;
}

function createList() {
    var list = [];
    return list;
}

function createParentListElementUi(index) {
    var parentListElement = document.createElement("li");

    var recreatedListElementId = generateListId(index);
    parentListElement.setAttribute("id", recreatedListElementId);
    parentListElement.setAttribute("data-index", index);

    return parentListElement;
}

function createListDivElement(index) {
    var listDivElement = document.createElement("div");

    var recreatedDivElementId = generateParentDivId(index);
    listDivElement.setAttribute("id", recreatedDivElementId);
    listDivElement.setAttribute("data-index", index);

    listDivElement.classList.add("task-text-styling");
    listDivElement.classList.add("wrap-text");
    listDivElement.classList.add("col-12");

    return listDivElement;

}
function createTextNodeDiv(index) {
    var textNodeDiv = document.createElement("div");
    var recreatedTextNodeDivId = generateTextTaskId(index);
    textNodeDiv.setAttribute("id", recreatedTextNodeDivId);
    textNodeDiv.setAttribute("data-index", index);
    return textNodeDiv;
}
function createDeleteButtonDivUi(index) {
    var deleteButtonDiv = document.createElement("div");
    var recreatedDeleteButtonDivId = generateMarkDeleteButtonId(index);
    deleteButtonDiv.setAttribute("id", recreatedDeleteButtonDivId);
    deleteButtonDiv.setAttribute("data-index", index);
    return deleteButtonDiv;

}
function createDeleteButtonUi(index) {
    var deleteButton = document.createElement("button");
    deleteButton.onclick = markDeleteWhenDoneOnClick;

    var recreatedDeleteButtonId = generateMarkDeleteButtonId(index);
    deleteButton.setAttribute("id", recreatedDeleteButtonId);
    deleteButton.setAttribute("data-index", index);

    deleteButton.innerHTML = "&#10007";
    deleteButton.classList.add("mark-done-delete-button");
    deleteButton.classList.add("button-styling");

    var deleteButtonDiv = createDeleteButtonDivUi(index);
    deleteButtonDiv.appendChild(deleteButton);
    return deleteButtonDiv;

}
function createUndoButtonDivUi(index) {
    var undoButtonDiv = document.createElement("div");
    var recreatedUndoDivId = generateUndoButtonId(index);
    undoButtonDiv.setAttribute("id", recreatedUndoDivId);
    undoButtonDiv.setAttribute("data-index", index);
    return undoButtonDiv;

}
function createUndoButtonUi(index) {
    var undoButton = document.createElement("button");
    undoButton.onclick = undoDoneOnclick;

    var recreatedUndoButtonId = generateUndoButtonId(index);
    undoButton.setAttribute("id", recreatedUndoButtonId);
    undoButton.setAttribute("data-index", index);

    undoButton.innerHTML = "&#x238c";
    undoButton.classList.add("button-styling");
    undoButton.classList.add("mark-done-delete-button");

    var undoButtonDiv = createUndoButtonDivUi(index);
    undoButtonDiv.appendChild(undoButton);
    return undoButtonDiv;

}
function createDoneButtonDivUi(index) {
    var doneButtonDiv = document.createElement("div");
    var recreatedDoneButtonDivId = generateMarkDoneButtonId(index);
    doneButtonDiv.setAttribute("id", recreatedDoneButtonDivId);
    doneButtonDiv.setAttribute("data-index", index);
    return doneButtonDiv;
}
function createDoneButtonUi(index) {
    var doneButton = document.createElement("button");
    var doneButtonDiv = createDoneButtonDivUi(index);
    doneButton.innerHTML = "&#10003";
    doneButton.classList.add("button-styling");
    doneButton.classList.add("mark-done-delete-button");
    var recreatedDoneButtonId = generateMarkDoneButtonId(index);
    doneButton.setAttribute("id", recreatedDoneButtonId);
    doneButton.setAttribute("data-index", index);
    doneButton.onclick = markDoneOnclick;
    doneButtonDiv.appendChild(doneButton);
    return doneButtonDiv;

}
function createDoneListContent(index) {
    var currentTaskText = createdList[index].text;
    var taskTextPElement = document.createElement("p");
    var taskTextNode = document.createTextNode(currentTaskText);

    taskTextPElement.classList.add("done-task");

    var recreatedTaskTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTaskTextId);
    taskTextPElement.setAttribute("data-index", index);

    var textNodeDiv = createTextNodeDiv(index);
    var listDivElement = createListDivElement(index);
    var listContentDiv = createParentListElementUi(index);
    var deleteButton = createDeleteButtonUi(index);
    var undoButton = createUndoButtonUi(index);

    listDivElement.classList.add("task-text-styling");
    listDivElement.classList.add("wrap-text");
    listDivElement.classList.add("row");
    textNodeDiv.classList.add("col-12");
    deleteButton.classList.add("col-4");
    undoButton.classList.add("col-4"); 

    taskTextPElement.appendChild(taskTextNode);
    textNodeDiv.appendChild(taskTextPElement);
    listDivElement.appendChild(textNodeDiv);
    listDivElement.appendChild(undoButton);
    listDivElement.appendChild(deleteButton);
    listContentDiv.appendChild(listDivElement);

    return listContentDiv;

}

function createDeleteListContent(index) {
    var currentTaskText = createdList[index].text;
    var taskTextPElement = document.createElement("p");
    var taskTextNode = document.createTextNode(currentTaskText);
    taskTextPElement.appendChild(taskTextNode);

    var recreatedTaskTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTaskTextId);
    taskTextPElement.setAttribute("data-index", index);

    var textNodeDiv = createTextNodeDiv(index);
    var listDivElement = createListDivElement(index);
    var parentListElement = createParentListElementUi(index);
    var doneButton = createDoneButtonUi(index);
    var undoButton = createUndoButtonUi(index);

    listDivElement.classList.add("task-text-styling");
    listDivElement.classList.add("wrap-text");
    listDivElement.classList.add("row");
    textNodeDiv.classList.add("col-12");
    doneButton.classList.add("col-4");
    undoButton.classList.add("col-4"); 

    textNodeDiv.appendChild(taskTextPElement);
    listDivElement.appendChild(textNodeDiv);
    listDivElement.appendChild(undoButton);
    listDivElement.appendChild(doneButton);
    parentListElement.appendChild(listDivElement);

    return parentListElement;

}
function createPendingListContent(index){
    var currentTaskText = createdList[index].text; 
    var taskTextPElement = document.createElement("p");
    var taskTextNode = document.createTextNode(currentTaskText); 
    taskTextPElement.appendChild(taskTextNode); 

    var recreatedTaskTextId = generateTextTaskId(index);
    taskTextPElement.setAttribute("id", recreatedTaskTextId);
    taskTextPElement.setAttribute("data-index", index);

    var textNodeDiv = createTextNodeDiv(index);
    var listDivElement = createListDivElement(index);
    var parentListElement = createParentListElementUi(index);
    var doneButton = createDoneButtonUi(index);
    var deleteButton = createDeleteButtonUi(index); 

    listDivElement.classList.add("row");
    textNodeDiv.classList.add("col-9");
    textNodeDiv.classList.add("task-text-styling");
    textNodeDiv.classList.add("wrap-text");
    doneButton.classList.add("col-1");
    deleteButton.classList.add("col-1");

    textNodeDiv.appendChild(taskTextPElement);
    listDivElement.appendChild(textNodeDiv);
    listDivElement.appendChild(doneButton);
    listDivElement.appendChild(deleteButton);
    parentListElement.appendChild(listDivElement);

    return parentListElement;
}
function createPendingUi(index) {
    var pendingTaskList = document.getElementById("hold-my-pending-list");
    var pendingListContent = createPendingListContent(index);
    pendingTaskList.appendChild(pendingListContent);
    return pendingTaskList; 
    
}
function createDoneUi(index) {
    var doneTask = document.getElementById("done-task-list");
    var listContent = createDoneListContent(index);
    doneTask.appendChild(listContent);
    return doneTask;
}
function createDeleteUi(index) {
    var deletedTask = document.getElementById("deleted-task-list");
    var deletedListContent = createDeleteListContent(index);
    deletedTask.appendChild(deletedListContent);
    return deletedTask;

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
        var currentTask = createdList[i];
        var currentTaskState = createdList[i].state;
        localStorage.setItem("list", JSON.stringify(createdList));
        updateStateAndCreateUi(currentTask, currentTaskState, createdList, i);
    }

    console.log(createdList);
    myInputField.value = '';
}

submitButton.onclick = submitButtonOnclick;

function removePendingTaskUi(index) {
    var pendingListId = generateListId(index);
    var fetchPendingListId = document.getElementById(pendingListId);
    if (fetchPendingListId === null) {

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
}

function removeDeletedTaskUi(index) {
    var deleteTaskId = generateListId(index);
    var deletedTaskToRemove = document.getElementById(deleteTaskId);
    if (deletedTaskToRemove === null) {

    } else {
        var deletedListItem = document.getElementById("deleted-task-list");
        deletedListItem.removeChild(deletedTaskToRemove);
    }
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
