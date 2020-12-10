window.onload=aboutUs;

function aboutUs(){
	var imgContainer=document.getElementById("specials");
	var links=imgContainer.getElementsByTagName("a");
	var description=document.getElementById("description");
	var description1=document.getElementById("description1");
    links[0].onmouseover=displayDescript;
	links[1].onmouseover=displayDescript1;
	links[0].onmouseout=hideDescript;
	links[1].onmouseout=hideDescript1;
	function displayDescript(){
		description.style.display="block";
		description.style.backgroundColor="black";
		description.style.position="absolute";
		description.style.left="5%";
		description.style.top="35%";
		description.style.width="50%";
		description.style.color="white";
		description.style.zIndex="100";
		description.style.padding="10px";
		description.style.fontFamily="miriam libre";
	}
	function hideDescript(){
		description.style.display="none";
	}
	
	function displayDescript1(){
		description1.style.display="block";
		description1.style.backgroundColor="black";
		description1.style.position="absolute";
		description1.style.left="5%";
		description1.style.top="60%";
		description1.style.width="50%";
		description1.style.color="white";
		description1.style.zIndex="100";
		description1.style.padding="10px";
		description.style.fontFamily="miriam libre";
	}
	function hideDescript1(){
		description1.style.display="none";
	}
}