function createTable(){
	var rows = +prompt("Enter Rows.....");
	var columns = +prompt("Enter Columns.....");
	var main = document.getElementById('parent');
	for(var i=1; i<=rows; i++){
		var tr = document.createElement('tr');
		//var trText = document.createTextNode("Row : " + i);
		//tr.appendChild(trText);
		main.appendChild(tr);
			for(var j=1; j<=columns; j++){
				var td = document.createElement('td');
				var tdText = document.createTextNode("Rows : " + i + " Columns : " + j);
				td.appendChild(tdText);
				main.appendChild(td);
			}
	}
}

