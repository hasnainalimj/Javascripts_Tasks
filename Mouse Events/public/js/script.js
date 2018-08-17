//Task 1
function taskOne(){
	alert("You clicked the right link");
}

//Task 2
function taskTwo(){
	alert("You clicked the right button");
}

//Task 3
function taskThree(){
	var inputUser = prompt("Please enter your name.....");
	alert("Hello, " + inputUser);
}

//Task 4
function taskFour(){
	var inputUser = prompt("Please enter your name.....");
	var inputLength = inputUser.length;
	alert("Hello, " + inputUser + "\nLength of user input is : " +inputLength);
}

//Task 5
function taskFive(){
	alert("Thanks for purchasing a phone from us");
}

//Taskl  6A
function mouseOverImage() {
           document.getElementById("abc").src = "images/bulb.png";
       }

 function mouseOutImage() {
           document.getElementById("abc").src = "images/thomas.png";
       }