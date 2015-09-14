'use strict';
var todoItemArray = [];

var todoForm = document.getElementById('todo-form');
var todoInput = document.getElementById('todo-list');
var todoItems = document.getElementById('todo-items');

console.log(todoForm);
console.log(todoInput);
console.log(todoItems);

function onToDoItemSubmit(e) {
	e.preventDefault();

	if(todoInput.value.length){
		todoItemArray.push(todoInput.value);
		todoInput.value = '';
		render();
	}

	else {
		throw 'Invalid input error';
	}
}

todoForm.addEventListener('submit', onToDoItemSubmit);

function render() {
	var htmlString = todoItemArray.join('</div><div>');
	var htmlArray = todoItemArray.map(function(item) {
		return '<div><input type="checkbox">' + item + '</div>';
	});
	var htmlString=htmlArray.join('\n');
	console.log(todoItemArray);
	console.log(htmlArray);
	console.log(htmlString);

	todoItems.innerHTML = htmlString;
}

	




/*label.addEventListener('click', function() {
	document.getElementById('middle').value=
document.getElementById('label').value
	/*likes.innerHTML = count + 'Likes'
	count++;
});*/

/*likes.addEventListener('click', function() {

})


function doReset() {
	label.value = 'Likes'
	most.innerHTML = 'Label was reset'
	most.style.textDecoration = 'underline'
}

reset.addEventListener('click', doReset);

reset.addEventHandler('click');{
	console.log('text');
}*/