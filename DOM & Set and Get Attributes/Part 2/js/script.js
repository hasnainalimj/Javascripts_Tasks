function getAttributes(){
	
	var target = document.getElementById('myLink');
	
	var href = target.getAttribute('href');
	var type = target.getAttribute('type');
	var hreflang = target.getAttribute('hreflang');
	var rel = target.getAttribute('rel');
	var target = target.getAttribute('target');

	alert("Value of href attribute is : " + href);
	alert("Value of type attribute is : " + type);
	alert("Value of hreflang attribute is : " + hreflang);
	alert("Value of rel attribute is : " + rel);
	alert("Value of target attribute is : " + target);
}