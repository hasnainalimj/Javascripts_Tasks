//Task 1
function taskOne(){
	var student = {
		name : 'Hasnain Ali',
		age : 23,
		student_id : 12478
	}
	alert('Student Name : ' + student.name + "\nStudent Age : " + student.age + "\nStudent Id : " + student.student_id);
}

//Task 2
function taskTwo(){
	var studentName = prompt('Enter Student Name.....');
	var studentId = prompt('Enter Student Id.....');
	var htmlMarks = +prompt('Enter HTML Marks.....');
	var cssMarks = +prompt('Enter CSS Marks.....');
	var javascriptMarks = +prompt('Enter JavaScript Marks.....');
	var bootstrapMarks = +prompt('Enter Bootstrap Marks.....');
	var totalMarks = htmlMarks + cssMarks + javascriptMarks +bootstrapMarks;

	var marksheet = {
		Student_Name : studentName,
		Student_ID : studentId,
		Subject_HTML : htmlMarks,
		Subject_CSS : cssMarks,
		Subject_JavaScript : javascriptMarks,
		Subject_Bootstrap : bootstrapMarks,
		Total_Marks : totalMarks
	}

	alert("-----MARKSHEET-----\nStudent Name : " + marksheet.Student_Name + "\nStudent Id : " + marksheet.Student_ID + "\nHTML Marks : " + marksheet.Subject_HTML + "\nCSS Marks : " + marksheet.Subject_CSS + "\nJavaScript Marks : " + marksheet.Subject_JavaScript + "\nBootStrap Marks : " + marksheet.Subject_Bootstrap + "\nTotal Marks : " + marksheet.Total_Marks );
}

//Task 3
function taskThree(){

	var marksheets = {
		
		studentOne : {
		Student_One_Name : 'Ali Haider',
		Student_One_ID : 542,
		Subject_One_HTML : 78,
		Subject_One_CSS : 54,
		Subject_One_JavaScript : 69,
		Subject_One_Bootstrap : 77,
		Max_Marks_One : 400
		},

		studentTwo : {
		Student_Two_Name : 'Khalil Khan',
		Student_Two_ID : 909,
		Subject_Two_HTML : 88,
		Subject_Two_CSS : 64,
		Subject_Two_JavaScript : 75,
		Subject_Two_Bootstrap : 55,
		Max_Marks_Two : 400
		}

	}

	//Student One
	var oneHtml = marksheets.studentOne.Subject_One_HTML;
	var oneCss = marksheets.studentOne.Subject_One_CSS;
	var oneJs = marksheets.studentOne.Subject_One_JavaScript;
	var oneBs = marksheets.studentOne.Subject_One_Bootstrap;
	var oneTotalMarks = oneHtml + oneCss + oneJs + oneBs;
	marksheets.studentOne.Total_Marks_One = oneTotalMarks;
	
	//Calculating Student One Percentage
	var onePercentage = (marksheets.studentOne.Total_Marks_One/marksheets.studentOne.Max_Marks_One)*100;

	//Student Two
	var twoHtml = marksheets.studentTwo.Subject_Two_HTML;
	var twoCss = marksheets.studentTwo.Subject_Two_CSS;
	var twoJs = marksheets.studentTwo.Subject_Two_JavaScript;
	var twoBs = marksheets.studentTwo.Subject_Two_Bootstrap;
	var twoTotalMarks = twoHtml + twoCss + twoJs + twoBs;
	marksheets.studentTwo.Total_Marks_Two = twoTotalMarks;
	
	//Calculating Student One Percentage
	var twoPercentage = (marksheets.studentTwo.Total_Marks_Two/marksheets.studentTwo.Max_Marks_Two)*100;	

	//Both Marksheets
	alert("-----MARKSHEET ONE-----\nStudent Name : " + marksheets.studentOne.Student_One_Name + "\nStudent Id : " + marksheets.studentOne.Student_One_ID + "\nHTML Marks : " + marksheets.studentOne.Subject_One_HTML + "\nCSS Marks : " + marksheets.studentOne.Subject_One_CSS + "\nJavaScript Marks : " + marksheets.studentOne.Subject_One_JavaScript + "\nBootStrap Marks : " + marksheets.studentOne.Subject_One_Bootstrap + "\nObtained Marks : " + marksheets.studentOne.Total_Marks_One + "\nTotal Marks : " + marksheets.studentOne.Max_Marks_One + "\nPercentage : " +  onePercentage + "%");
	alert("-----MARKSHEET TWO-----\nStudent Name : " + marksheets.studentTwo.Student_Two_Name + "\nStudent Id : " + marksheets.studentTwo.Student_Two_ID + "\nHTML Marks : " + marksheets.studentTwo.Subject_Two_HTML + "\nCSS Marks : " + marksheets.studentTwo.Subject_Two_CSS + "\nJavaScript Marks : " + marksheets.studentTwo.Subject_Two_JavaScript + "\nBootStrap Marks : " + marksheets.studentTwo.Subject_Two_Bootstrap + "\nObtained Marks : " + marksheets.studentTwo.Total_Marks_Two + "\nTotal Marks : " + marksheets.studentTwo.Max_Marks_Two + "\nPercentage : " + twoPercentage + "%");

	//Scholarship Condition
	if(onePercentage>twoPercentage){
		alert(marksheets.studentOne.Student_One_Name + " Got Scholarship With " + onePercentage + "%");
	}else{
		alert(marksheets.studentTwo.Student_Two_Name + " Got Scholarship With " + twoPercentage + "%");
	}
	
}

//Task 4
function taskFour(){
	var email = document.getElementById('txtEmail').value;
	var password = document.getElementById('txtPassword').value;
	var text = document.getElementById('welcomeText');

	var login = {
		admin : {
			admin_email : 'admin@gmail.com',
			admin_password : 'admin'
		},
		user : {
			user_email : 'hasnain@gmail.com',
			user_password : 'hasnain'
		}
	}

	if(email === login.admin.admin_email && password === login.admin.admin_password){
		text.innerHTML = "Welcome As A Admin";
	}
	else if(email === login.user.user_email && password === login.user.user_password){
		text.innerHTML = "Welcome As A User";
	}
	else{
		alert("Incorrect Username & Password!");
	}

	document.getElementById('txtEmail').value = "";
	document.getElementById('txtPassword').value = "";
}