$("#enterTodo").on("click", addNewTodoItem);

var assignmentDate;
var assignmentName;

var dateOrder = [] //Order of the dates, closest to the day first.

var dueTomorrow = false; 
var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();

applyTodoFunctions();
//logger();

// Apply all the event listeners for the todo items
function applyTodoFunctions() {
	// Toggle between importance for todo
	$(document).on("click", ".importance", function() {
		$(this).toggleClass("active");
	});

	// Toggle between strikeout for the text each time check is clicked
	$(document).on("click", ".todoCheck", function() {
		// $todoContent is the todo text corresponding to the checkbox clicked
		var $todoContent = $(this).parents(":eq(0)").find(".todoContent")
		if ($(this).prop("checked") === true) {
			console.log($todoContent.css("text-decoration"))
			$todoContent.css("text-decoration", "line-through");
		} else if ($(this).prop("checked") === false) {
			$todoContent.css("text-decoration", "none");
		}
	});

	// When remove button is clicked, remove the entire todo item
	$(document).on("click", ".remove", function() {
		$(this).parents(":eq(0)").remove();
	});

	$(document).on("dblclick", ".todoContent", function() {
		$(this).prop("contentEditable", true);
	});

}

// Adding new todo items based on date and content provided
function addNewTodoItem() {
	var newTodoContent = $("#newTodo").val(); 
	var date = $("#todoDate").val(); // Referencing the Textbox for the date when you want to add a new task.
	assignmentName = newTodoContent;
	assignmentDate = date;
	var todoItemArray = ["<div class='todoItem'>", "<div class='importance'></div>",
						 "<input class='todoCheck' type='checkbox'>", "<div class='todoContent'>" + newTodoContent + "</div>",
						 "<div class='dueDate'>Due on " + date + "</div>", "<button class='remove'>X</button></div>"
						];
	$("#todoList").append(todoItemArray[0] + todoItemArray[1] + todoItemArray[2] + todoItemArray[3] + todoItemArray[4] + todoItemArray[5]);
	//console.log(date);
	console.log(assignmentDate);
}

// Prints out date and time. 
function logger() {
	console.log(month+"/"+day+"/"+year);
}

// Checks if something is due tomorrow 
function isDuetomorrow() {

}

// Places date of each assignment into an array, in date order. Sooner comes first. 
function orderDates(dateDue, dateToday, order[]) {
	dateDue = assignmentDate;

	order.push(dateDue);

}


