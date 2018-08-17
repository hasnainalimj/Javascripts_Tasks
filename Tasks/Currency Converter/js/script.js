function convertDollarToRupees(){
	dollar = document.getElementById("txtDollar").value;
	rupees = document.getElementById("txtRupees");
	rupees.value = dollar * 0.0090;
}

function convertRupeesToDollar(){
	rupees = document.getElementById("txtRupees").value;
	dollar = document.getElementById("txtDollar");
	dollar.value = rupees * 110.62;
}