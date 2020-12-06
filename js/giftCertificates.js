window.onload=giftCertificates;

function giftCertificates(){
	
	var finalCard=document.getElementById("finalcard");
	var occasionPlace=finalCard.getElementsByTagName("h4");
	var cardReceiver=finalCard.getElementsByTagName("em")[0];
	var cardMessage=finalCard.getElementsByTagName("p")[1];
	var cardSender=finalCard.getElementsByTagName("em")[1];
	var cardPrice=finalCard.getElementsByTagName("p")[3];
	
	var formElement=document.forms.giftCard;
	var sender=formElement.senderName;
	var receiver=formElement.receiverName;
	var email=formElement.receiverEmail;
	var amount=formElement.amount;
	var message=formElement.message;
	var occasion=formElement.occasion;
	var selected ;
	
	 var nameRegex = /^([A-Za-z])+$/;
	 var emailRegex=/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	 var amountRegex=/^\d{1,4}$/;
	 
	 var imgChosen=document.getElementById("chosenImage");
	 $("#backgroundPics img").click(function(){
		var cardHref=$(this).attr("src");
		var url="url("+cardHref+")";
		imgChosen.style.backgroundImage=url;
		imgChosen.style.opacity="0.15";
		/*imgChosen.style.backgroundRepeat="repeat-x";*/
	});
	
     function fillCard(){
		 //Validation
		 
		 if(!nameRegex.test(sender.value)){
			 sender.style.backgroundColor="red";
			 sender.focus();
			 return false;
		 }else{
			 sender.style.backgroundColor="white";
		 }
		 if(!nameRegex.test(receiver.value)){
			 receiver.style.backgroundColor="red";
			 receiver.focus();
			 return false;
		 }else{
			 receiver.style.backgroundColor="white";
		 }
		 if(!emailRegex.test(email.value)){
			 email.style.backgroundColor="red";
			 email.focus();
			 return false;
		 }else{
			 email.style.backgroundColor="white";
		 }
		 if(!amountRegex.test(parseInt(amount.value))||parseInt(amount.value)<0){
			 amount.style.backgroundColor="red";
			 amount.focus();
			 return false;
			 
		 }else{
			 amount.style.backgroundColor="white";
		 }
		 selected = occasion.options[occasion.selectedIndex].text;
		 occasionPlace[0].innerHTML=selected;
		 cardSender.innerHTML=sender.value;
		 cardReceiver.innerHTML=receiver.value;
		 cardMessage.firstElementChild.style.overflow="visible";
		 cardMessage.firstElementChild.innerHTML=message.value;
		 cardPrice.innerHTML="$"+amount.value;
		 return false;
	 }
	 formElement.onsubmit=fillCard;
	
    
}