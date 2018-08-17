function updateRecord(){
	var txtValue = document.getElementById('txtValue');
	var result = txtValue.value;
	
	var ids = document.getElementById('ids');
	var result_2 = ids.value;
	
	if(result === "" && result_2 === "-----List Numbers-----"){
		alert("Please Filled Appropriate.....")
	}
	else if(result_2==='1'){
		var valueOne = document.getElementById('valueOne');
		valueOne.innerHTML = result; 
	}
	else if(result_2==='2'){
		var valueTwo = document.getElementById('valueTwo');
		valueTwo.innerHTML = result; 
	}
	else if(result_2==='3'){
		var valueThree = document.getElementById('valueThree');
		valueThree.innerHTML = result; 
	}
	else if(result_2==='4'){
		var valueFour = document.getElementById('valueFour');
		valueFour.innerHTML = result; 
	}
	else if(result_2==='5'){
		var valueOne = document.getElementById('valueFive');
		valueFive.innerHTML = result; 
	}
	else if(result_2==='6'){
		var valueSix = document.getElementById('valueSix');
		valueSix.innerHTML = result; 
	}
	else if(result_2==='7'){
		var valueSeven = document.getElementById('valueSeven');
		valueSeven.innerHTML = result; 
	}
	else if(result_2==='8'){
		var valueEight = document.getElementById('valueEight');
		valueEight.innerHTML = result; 
	}
	else if(result_2==='9'){
		var valueOne = document.getElementById('valueNine');
		valueNine.innerHTML = result; 
	}
	else if(result_2==='10'){
		var valueTen = document.getElementById('valueTen');
		valueTen.innerHTML = result; 
	}
}