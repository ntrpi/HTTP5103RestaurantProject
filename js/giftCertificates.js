window.onload=giftCertificates;

function giftCertificates(){
	
	//Filling the card information
	var finalCard=document.getElementById("finalcard");       //Card element
	var occasionPlace=finalCard.getElementsByTagName("h4");   //Gift occasion->wedding, birthday ...
	var cardReceiver=finalCard.getElementsByTagName("em")[0]; //Gift receiver
	var cardMessage=finalCard.getElementsByTagName("p")[1];   //Accompanying message for receiver
	var cardSender=finalCard.getElementsByTagName("em")[1];   //Gift sender 
	var cardPrice=finalCard.getElementsByTagName("p")[3];     //Gift value in dollar
	
	//Getting all the fields of the form
	var formElement=document.forms.giftCard;  //Form variable
	var sender=formElement.senderName;        //Sender variable
	var receiver=formElement.receiverName;
	var email=formElement.receiverEmail;
	var amount=formElement.amount;
	var message=formElement.message;
	var occasion=formElement.occasion;        //Select elements
	var selected ;                            //Type of selected occasion 
	
	//Form validation variable
	var validate=document.getElementById("validate");
	
	//Regex to verify form values
	 var nameRegex = /^([A-Za-z])+$/;     //Names
	 var emailRegex=/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;  //Email
	 var amountRegex=/^\d{1,4}$/;         //Amount
	 
	 //Jquery function to set or change the background image of the card
	 var imgChosen=document.getElementById("chosenImage");
	 $("#backgroundPics img").click(function(){
		var cardHref=$(this).attr("src");
		var url="url("+cardHref+")";
		imgChosen.style.backgroundImage=url;
		imgChosen.style.opacity="0.15";
		
	});
	  
     //Function used to fill the card fields including validation
     function fillCard(){

		 //Validation is confirmed by a paragraph element
		 validate.innerHTML="Form not valid!";
		 validate.style.color="red";
		 validate.style.fontSize="1.25em";
		 validate.style.display="none";
		 validate.style.display="block";
		 validate.style.marginLeft="0.25em";
		 //
		 
		 //Validation of sender name
		 if(!nameRegex.test(sender.value)){
			 sender.style.backgroundColor="red";
			 sender.focus();
			 return false;
		 }else{
			 sender.style.backgroundColor="white";
		 }
		 //Validation of receiver name
		 if(!nameRegex.test(receiver.value)){
			 receiver.style.backgroundColor="red";
			 receiver.focus();
			 return false;
		 }else{
			 receiver.style.backgroundColor="white";
		 }
		 //Validation of receiver email
		 if(!emailRegex.test(email.value)){
			 email.style.backgroundColor="red";
			 email.focus();
			 return false;
		 }else{
			 email.style.backgroundColor="white";
		 }
		 //Card amount validation
		 if(!amountRegex.test(parseInt(amount.value))||parseInt(amount.value)<0){
			 amount.style.backgroundColor="red";
			 amount.focus();
			 return false;
			 
		 }else{
			 amount.style.backgroundColor="white";
		 }
		 //Filling the card after validation
		 selected = occasion.options[occasion.selectedIndex].text;
		 occasionPlace[0].innerHTML=selected;
		 cardSender.innerHTML=sender.value;
		 cardReceiver.innerHTML=receiver.value;
		 cardMessage.firstElementChild.style.overflow="visible";
		 cardMessage.firstElementChild.innerHTML=message.value;
		 cardPrice.innerHTML="$"+amount.value;
		 
		 //Confirmation of right validation of all fields
		 validate.innerHTML="Form successfully validated!";
		 validate.style.color="green";
		 
		 return false;
	 }
	 formElement.onsubmit=fillCard;
}