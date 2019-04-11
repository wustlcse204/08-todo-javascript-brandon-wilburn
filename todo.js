var api = "d18f1adca4df69e67de8c3cb3dae2becf51be12d633dc716731361e782a8dd3b";

// Loading
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  // console.log("1");
  if (this.readyState == 4 && this.status == 200) {
    // console.log("2");
    var todos = JSON.parse(this.responseText);
    // console.log("Working!");
    for (var i=0; i < todos.length; i++) {
      displayTodo(todos[i]);
    }
    } else if (this.readystate == 4) {
      // console.log("3");
      console.log(this.responsetext);
    }
};

xhttp.open("GET", "https://api.kraigh.net/todos", true);
xhttp.setRequestHeader("x-api-key", api);
xhttp.send();

// Posting
document.getElementById("submit-button").addEventListener("click", function (event) {
  event.preventDefault();

  var data = {
    text: document.getElementById("addTodo").value
  }

  // console.log(data);

  var xhttp2 = new XMLHttpRequest();

  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayTodo(JSON.parse(this.responseText));
    } else if (this.readystate == 4) {
      console.log(this.responsetext);
    }
  };

  xhttp2.open("POST", "https://api.kraigh.net/todos", true);
  xhttp2.setRequestHeader("Content-type", "application/json");
  xhttp2.setRequestHeader("x-api-key", api);
  xhttp2.send(JSON.stringify(data));

});

// Display

function displayTodo(TodoContent) {
  var todo = document.createElement("article");

  var comp = document.createElement("button");
  comp.classList.add("completed-button");
  comp.innerHTML = "&#10004";
  todo.appendChild(comp);

  // console.log(todo);
  // console.log(comp);

  var text = document.createElement("p");
  text.classList.add("todo-list-text");
  text.innerText = TodoContent.text;
  todo.appendChild(text);
  // console.log(text);

  var del = document.createElement("button");
  del.classList.add("close");
  del.innerHTML = "&#10008;";
  todo.appendChild(del);
  // console.log(del);
  // added.setAttribute("id", )
  document.getElementById("todo-list").appendChild(todo);

  comp.addEventListener("click", completedTodo);
  del.addEventListener("click", erase);

  document.getElementById("addTodo").value = '';
}

// Complete
function completedTodo(event) {
  var todoID = event.target.parentNode.id;
    console.log(todoID);
  var data = {
    completed: true
  };

  var wtf = new XMLHttpRequest();



  wtf.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responsetext);
    } else if (this.readystate == 4) {
      console.log(this.responsetext);
    }
  };

  wtf.open("PUT", "https://api.kraigh.net/todos/" + todoID, true);
  wtf.setRequestHeader("Content-type", "application/json");
  wtf.setRequestHeader("x-api-key", api);
  wtf.send(JSON.stringify(data));
}
// Delete
function erase () {

}
