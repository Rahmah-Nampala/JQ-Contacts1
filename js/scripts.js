$(document).ready(function() {
	$("img").delay(600).fadeOut(600, function(){
		$(this).attr("src", "img/kampala-taxi.jpg").fadeIn(600);
	});

	function Contact(firstname, lastname, phone, email, country) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.email = email;
		this.country = country;
	};

	var allContacts = [];
	$("#grim").click(function(event) {
		var firstname = $("#fname").val();
		var lastname = $("#lname").val();
		var phone = $("#phone").val();
		var email = $("#email").val();
		var country = $("#country").val();
			var newcontact = {firstname, lastname, phone, email, country};
			allContacts.push(newcontact);
			//console.log("Submitted!");
			console.log(allContacts);
			//alert("Submitted!");
	});
	// var searchContacts = ()=> {
	// 	("#result").innerHTML = "";
	// 	var searchPhrase = $(".searchPhrase").val();
	// 	for (i = 0; i <Contact.length; i++) {
	// 		contact = allContacts[i];
	// 		firstname = contact.firstname;
	// 		phone = contact.phone;
	// 		if (firstname.includes(searchPhrase)) {
	// 			console.log(firstname." found!")
	// 			var element = $("#result");
	// 		} else {
	// 			console.log("not found");
	// 		};
	// 	};
	// };
});
		
// 		console.log(firstname, " found!") 
// 		// return the contact info to the page
// 		var ptag = document.createElement("p");
// 		var node = document.createTextNode(firstname + ": "+ phone);
// 		ptag.appendChild(node);
// 		var element = document.getElementById("result");
// 		element.appendChild(ptag);
// 	} else {
// 		// else, return an error message
// 		console.log("Not found!")
// 	}
// 	};
// };