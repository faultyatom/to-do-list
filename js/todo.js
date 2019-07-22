function createTask(text) {
    var taskToDo = { state: "not done", text: text, timeAdded: Date.now() };
    return taskToDo;
}

function createList() {
    var list = [];
    return list;
}

function updateState(currentTaskText, newState, createdList) {
    var index = createdList.length - 1; 
    
    if (newState == "done") {
        var doneTask = document.getElementById("done-task-list");
        var doneTaskListElement = document.createElement("li");
        doneTask.appendChild(doneTaskListElement);
        var doneTaskDiv = document.createElement("div");
        doneTaskListElement.appendChild(doneTaskDiv);
        var taskTextPElement = document.createElement("p");
        doneTaskDiv.appendChild(taskTextPElement);
        var doneTaskTextNode = document.createTextNode(currentTaskText);
        taskTextPElement.appendChild(doneTaskTextNode);

        var recreatedListId = generatePendingListId(index);
        doneTaskListElement.setAttribute("id", recreatedListId);
        doneTaskListElement.setAttribute("data-index", index);

        var recreatedParentDivId = generateParentDivId(index);
        doneTaskDiv.setAttribute("id", recreatedParentDivId);
        doneTaskDiv.setAttribute("data-index", index);

        var recreatedTextId = generateTextTaskId(index);
        taskTextPElement.setAttribute("id", recreatedTextId);
        taskTextPElement.setAttribute("data-index", index);

        taskTextPElement.classList.add("done-task");
        doneTaskDiv.classList.add("task-text-styling");
        doneTaskDiv.classList.add("wrap-text");
        doneTaskDiv.classList.add("col-9");

    } else if (newState == "deleted") {
        var deletedTask = document.getElementById("deleted-task-list");
        var deletedListElement = document.createElement("li");
        deletedTask.appendChild(deletedListElement);
        var deletedTaskDiv = document.createElement("div");
        deletedListElement.appendChild(deletedTaskDiv);
        var taskTextPElement = document.createElement("p");
        deletedTaskDiv.appendChild(taskTextPElement);
        var textNode = document.createTextNode(currentTaskText);
        taskTextPElement.appendChild(textNode);

        var recreatedListId = generatePendingListId(index);
        deletedListElement.setAttribute("id", recreatedListId);
        deletedListElement.setAttribute("data-index", index);

        var recreatedParentDivId = generateParentDivId(index);
        deletedTaskDiv.setAttribute("id", recreatedParentDivId);
        deletedTaskDiv.setAttribute("data-index", index);

        var recreatedTextId = generateTextTaskId(index);
        taskTextPElement.setAttribute("id", recreatedTextId);
        taskTextPElement.setAttribute("data-index", index);

        deletedTaskDiv.classList.add("task-text-styling");
        deletedTaskDiv.classList.add("wrap-text");
        deletedTaskDiv.classList.add("col-9");
    } else {
        var pendingTask = document.getElementById("hold-my-pending-list")
        var listElement = document.createElement("li");
        var recreatedListId = generatePendingListId(index);
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
        var currentTaskText = currentTask.text; 
        updateState(currentTaskText, currentTaskState, createdList);  
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
    var hiddenText = document.getElementById("hide-my-text");
    hiddenText.style.visibility = "hidden";

    if (textUserHasEntered.length == 0) {
        hiddenText.style.visibility = "visible";
    } else {
        createdList = addTask(textUserHasEntered, createdList);
        var i = createdList.length - 1;
        currentTaskState = createdList[i].state;
        localStorage.setItem("list", JSON.stringify(createdList));
        updateState(textUserHasEntered, currentTaskState, createdList); 
    }

    console.log(createdList);
    myInputField.value = '';
}

submitButton.onclick = submitButtonOnclick;

function markDoneOnclick(event) {
    var buttonThatWasClicked = event.target;
    var indexOfTask = buttonThatWasClicked.getAttribute("data-index");
    createdList = markDone(createdList, indexOfTask);

    var currentTask = createdList[indexOfTask];
    var currentTaskText = currentTask.text;
    var currentTaskState = currentTask.state;
    //var recreatedTaskTextId = generateTextTaskId(indexOfTask);
    // //var doneTaskText = document.getElementById(recreatedTaskTextId).textContent;
    // //createDoneListElement(doneTaskText, indexOfTask);    
    // //updateState()
     updateState(currentTaskText, currentTaskState, createdList); 

    var pendingListId = generatePendingListId(indexOfTask);
    var fetchPendingListId = document.getElementById(pendingListId);
    var pendingList = document.getElementById("hold-my-pending-list");
    pendingList.removeChild(fetchPendingListId);
    console.log(createdList);
}

function deleteButtonOnclick(event) {
    var clickedButton = event.target;
    var indexOfTask = clickedButton.getAttribute("data-index");
    createdList = markDelete(createdList, indexOfTask);
    var currentTaskState = createdList[indexOfTask].state;

    var recreatedTaskTextId = generateTextTaskId(indexOfTask);
    var deletedTasktext = document.getElementById(recreatedTaskTextId).textContent;
    updateState(deletedTasktext, currentTaskState, createdList); 

    var pendingListDivId = generatePendingListId(indexOfTask);
    var deleteMyEntireTask = document.getElementById(pendingListDivId);
    var pendingTaskDiv = document.getElementById("hold-my-pending-list");
    pendingTaskDiv.removeChild(deleteMyEntireTask);
    console.log(createdList);
}

function markDelete(createdList, indexOfTaskToBeDeleted) {
    var taskStateToBeUpdated = createdList[indexOfTaskToBeDeleted];
    taskStateToBeUpdated.state = "deleted";
    localStorage.setItem("list", JSON.stringify(createdList));
    return createdList;
}

function markDone(createdList, indexOfTaskStateToBeUpdated) {
    var taskToBeUpdated = createdList[indexOfTaskStateToBeUpdated];
    taskToBeUpdated.state = "done";
    localStorage.setItem("list", JSON.stringify(createdList));
    return createdList;
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
//     6.5 If all items in local storage have the state of done, they will all be added to the done column. Pending and deleted lists will be empty. Same 
// 7. When there is a really long sentence, the text will wrap in all the columns irrespective of whether they are added from local storage or if they are newly added items 
// 8. When the Submit button is clicked, but there is no text-input, a text saying input field is empty will be displayed
// 9. When numbers are typed in the input field, they will also be added to the pending list 
// 10. When submit button is clicked:
//     10.1 it will append the text to the pending list with the mark done/delete buttons
//     10.2 the input field will become empty once the button is clicked 
