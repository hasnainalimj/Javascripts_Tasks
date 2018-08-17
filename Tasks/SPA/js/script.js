function home(){	
	var heading = document.getElementById('heading');
	var paragraph = document.getElementById('paragraph');
	heading.innerHTML = "Home";
	paragraph.innerHTML = "Home content goes here";
}

function product(){
	var heading = document.getElementById('heading');
	var paragraph = document.getElementById('paragraph');
	heading.innerHTML = "Product";
	paragraph.innerHTML = "This is products section";
}

function about(){
	var heading = document.getElementById('heading');
	var paragraph = document.getElementById('paragraph');
	heading.innerHTML = "About Us";
	paragraph.innerHTML = "We do blah blah blah.....";
}

function contact(){
	var main = document.getElementById('main');

	var heading = document.getElementById('heading');
	var paragraph = document.getElementById('paragraph');
	heading.innerHTML = "Contact Us";
	paragraph.innerHTML = "Here some contact details";

	/*for(var i=0; i<120; i++){
		var removeHeading = main.childNodes[i];
		main.removeChild(removeHeading);
		var removeParagraph = main.childNodes[i];
		main.removeChild(removeParagraph);
	}*/
	
}