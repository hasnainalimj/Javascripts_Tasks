//ARRAY
var arr = [
{name: 'Asher', age: 22},
{name: 'Zubair', age: 20},
{name: 'Kashif', age: 23},
{name: 'Wasif', age: 17},
{name: 'Hanzala', age: 28}
]

//Question 1A
function questionOneA(){
	alert("Before Replacing 3rd Index : \nName : " + arr[3].name + "\nAge : " + arr[3].age);
	arr[3].name = "Siddiq";
	arr[3].age = 23;
	alert("After Replacing 3rd Index : \nName : " + arr[3].name + "\nAge : " + arr[3].age);
}

//Question 1B
function questionOneB(){
	alert("Please See the Results on Console");
	arr.push({name : "Umair" , age : 23});
	console.log("After Push :");
	console.log(arr);
}

//Question 1C
function questionOneC(){
	alert("Please See the Results on Console");
	arr.shift();
	console.log("Remove the First Element :");
	console.log(arr);
}

//Question 1D
function questionOneD(){
	alert("Please See the Results on Console");
	for(var i=0; i<arr.length; i++){
		arr[i].createdAt = new Date();
	}
	console.log(arr);
}

//Question 2
function questionTwo(){
	console.log("Selecting Between Age 18 to 28");
	var ages = [18,19,20,21,22,23,24,25,26,27,28];
	for(var i=0; i<=arr.length; i++){
		for(var j=0; j<=ages.length; j++){
			if(arr[i].age == ages[j]){
				console.log("Name : " + arr[i].name + " Age : " + arr[i].age);
			}
		}
	}
}

//Question 3
function questionThree(){
	alert("Please See the Results on Console");
	var students = [ 
	{
		_id: 'std1',
		name: 'Bill Gates',
		age: 30
	},

	{
		_id: 'std2',
		name: 'Steve Jobs',
		age: 30
	},

	{
		_id: 'std3',
		name: 'Suzanne Collins',
		age: 30
	}
	];

	var courses = [
	{
		name: 'Maths', 
		std_id: ['std3', 'std1']
	},

	{
		name: 'Computer Science', 
		std_id: ['std3', 'std2']
	},

	{
		name: 'Commerce', 
		std_id: ['std1']
	},
	]

	var mainArray = [
		{
			_id : students[0]._id,
			name : students[0].name,
			age : students[0].age,
			course1 : courses[0].name,
			course2 : courses[2].name
		},
		
		{
			_id : students[1]._id,
			name : students[1].name,
			age : students[1].age,
			course1 : courses[1].name
		},

		{
			_id : students[2]._id,
			name : students[2].name,
			age : students[2].age,
			course1 : courses[0].name,
			course2 : courses[1].name
		}  
	]

	console.log("----------Student One----------");
	console.log(mainArray[0]);
	console.log("----------Student Two----------");
	console.log(mainArray[1]);
	console.log("----------Student Three----------");
	console.log(mainArray[2]);
}