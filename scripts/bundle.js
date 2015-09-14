(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	if (todoInput.value.length) {
		todoItemArray.push(todoInput.value);
		todoInput.value = '';
		render();
	} else {
		throw 'Invalid input error';
	}
}

todoForm.addEventListener('submit', onToDoItemSubmit);

function render() {
	var htmlString = todoItemArray.join('</div><div>');
	var htmlArray = todoItemArray.map(function (item) {
		return '<div><input type="checkbox">' + item + '</div>';
	});
	var htmlString = htmlArray.join('\n');
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map