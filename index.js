function bgChange() {
  var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Light blue', 'Blue', 'White', 'Gray', 'Pink'];
  var boxes = document.querySelectorAll(".box");
  var numbers = document.querySelectorAll(".number");
  var button = document.querySelector("button");
  var randomNo = Math.random();
  button.addEventListener("click", function() {
    for (i = 0; i < boxes.length; i++) {
      // Pick a random color from the array 'colors'.
      boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
  });
  for (i = 0; i < numbers.length; i++) {
    // Pick a random color from the array 'colors'.
    numbers[i].innerHTML = Math.floor(Math.random() * 9) + 1;
  }

  button.style.cursor = "pointer";
}

function randomNumber() {
  var numbers = document.querySelectorAll(".number");
  for (i = 0; i < numbers.length; i++) {
    // Pick a random number from the array 'numbers'.
    numbers[i].innerHTML = Math.floor(Math.random() * 9) + 1;
  }

}

function changeText(id) {


  id.style.visibility = "hidden";
  var x = id.textContent;
  showalert(x);

}
var counter = 0;
var hideElements = [];

function showalert(x) {
  hideElements.push(x);
  counter++;

  if (hideElements.length == 9) {
    alert("The order in which the numbers disappeared is " + hideElements);
  }

}
