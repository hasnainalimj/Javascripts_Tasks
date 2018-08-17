function User(_id,name,profileImage,createdAt,friends){
	this._id = _id;
	this.name =  name;
	this.profileImage = profileImage;
	this.createdAt = createdAt;
	this.friends = friends;
}

var time = Date.now();

var user1 = new User((Math.random().toFixed(3)),"Hasnain Ali","http://image:hasnainalipic",time,);
var user2 = new User((Math.random().toFixed(3)),"Mj","http://image:mjpic",time,);
var user3 = new User((Math.random().toFixed(3)),"Osama","http://image:osamapic",time,);
var user4 = new User((Math.random().toFixed(3)),"Naveed","http://image:naveedpic",time,);
var user5 = new User((Math.random().toFixed(3)),"Rana Zubair","http://image:ranapic",time,);
var user6 = new User((Math.random().toFixed(3)),"samad","http://image:samadpic",time,);
var user7 = new User((Math.random().toFixed(3)),"Khalil","http://image:khalilpic",time,);
var user8 = new User((Math.random().toFixed(3)),"Absheer","http://image:absheerpic",time,);
var user9 = new User((Math.random().toFixed(3)),"Bilawal","http://image:bilawalpic",time,);
var user10 = new User((Math.random().toFixed(3)),"Sher Ali","http://image:sheralipic",time,);

var allUsers = [user1,user2,user3,user4,user5,user6,user7,user9,user9,user10];

user1.friends = [user2._id, user4._id, user6._id];

user2.friends = [user1._id, user3._id, user5._id];

user3.friends = [user8._id, user5._id, user10._id];

user4.friends = [user1._id, user2._id, user3._id];

user5.friends = [user4._id, user7._id, user9._id];

user6.friends = [user5._id, user2._id, user1._id];

user7.friends = [user1._id, user4._id, user8._id];

user8.friends = [user3._id, user9._id, user5._id];

user9.friends = [user1._id, user8._id, user2._id];

user10.friends = [user5._id, user6._id, user7._id];



//SHOW FRIENDSHIPS WITH EACH OTHER

function showFriends(){
	for(var i=0; i<allUsers.length; i++){
		console.log("\nX-----X-----X    " + allUsers[i].name + " Friends     X-----X-----X");
		for(var j=0; j<allUsers[i].friends.length; j++){
			for(var k=0; k<allUsers.length; k++){
				if (allUsers[i].friends[j] == allUsers[k]._id) {
                         console.log(allUsers[k].name);
                         break;
                     }
			}
		}
	}
}

showFriends();


function addFriend(userId, id){
	for(var i=0; i<allUsers.length; i++){
		if(userId == allUsers[i]._id){
			for(var j=0; j<allUsers.length; j++){
				if(id == allUsers[j]._id){
					allUsers[i].friends.push(allUsers[j]._id);
					console.log(allUsers[i].name + " & " + allUsers[j].name + " Are Now Friends.");
					break;
				}
			}
		}
		break;
	}
}

addFriend(user1._id,user5._id);



function removeFriend(userId, id){
	for(var i=0; i<allUsers.length; i++){
		if(userId == allUsers[i]._id){
			for(var j=0; j<allUsers[i].friends.length; j++){
				if(id == allUsers[i].friends[j]){
					for(var k=0; k<allUsers.length; k++){
						if(id == allUsers[k]._id){
							console.log(allUsers[k].name + " Removed From Friend List.");
							break;
						}
					}
					allUsers[i].friends.splice(j,1);
					break;
				}
			}
		}
	}
}

removeFriend(user1._id,user5._id);