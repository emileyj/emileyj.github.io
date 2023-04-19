alert ("hello"); 

function seeMore(){ 
	 let dots = document.getElementById("dots"); 
	 let moreText = document.getElementById("more"); 
	 let clickMe = document.getElementById("click"); 
	
	if(dots.style.display === "none"){ 
		dots.style.display = "inline"; 
		clickMe.innerHTML = "Read More"; 
		moreText.style.dsiplay= "none"; 
	} 
	else { 
		dots.style.display= "none"; 
		clickMe.innerHTML= "Read Less"; 
		moreText.style.display= "inline"; 
	}
	}
	
/*Quiz*/ 	
function showResult(){ 
	let score= 0;
	let question1 = document.getElementById("question-1").value; 
	let question2 = document.getElementById("question-2").value; 
	let question3= document.getElementById("question-3").value; 
	let question4= document.getElementById("question-4").value; 
     let section=document.getElementById("results"); 
	
	let result1=document.getElementById("line1");
	let result2= document.getElementById("line2"); 
	let result3= document.getElementById("line3"); 
	let result4= document.getElementById("line4"); 
	
	section.classList.remove("hidden"); 
	//Question 1 // 
	if(question1== "Cascading Style Sheet"){ 
		score++;
		result1.innerHTML= "<p> Question 1- Correct! </p>"; 
		
	} 
	else{ 
		result1.innerHTML=" <p> Question 1- Incorrect! </p>"; 
		total+= 0 
	} 
 //Question 2// 
	if(question2== "None"){ 
		score++
		result2.innerHTML= "<p> Question 2- Correct! </p>"; 
		 
	} 
	else{ 
		result2.innerHTML= "Question 2- Incorrect!"; 
		total+= 0
	} 
	
	//Question 3// 
	
	if(question3 == "td"){ 
		result3.innerHTML= "Question 3- Correct!"; 
		total+= 1 
	} 
	else{ 
		result3.innerHTML= "Question 3- Incorrect!"; 
		total += 0 
	} 
	
	//Question 4// 
	if(question4== "Yes"){ 
		result4.innerHTML= "Question 4- Correct!"; 
		total+= 1 
	} 
	else{
	result4.innerHTML= "Question 4- Incorrect!"; 
	total += 0 
	} 
}
//Results// 



//Slideshow// 
var able = true 
function changeSlide(){ 
	
	var a= document.getElementById("indian").src
	document.getElementById("indian").src=document.getElementById("pasta").src; 
	document.getElementById("pasta").src=document.getElementById("pancakes").src;
	document.getElementById("pancakes").src=document.getElementById("drink").src;
	document.getElementById("drink").src=document.getElementById("coffee").src; 
	document.getElementById("coffee").src=a} 
function nameThis() {  if (able ) { changeSlide(); 
	setInterval(changeSlide, 1000);
} }
	setInterval(changeSlide, 1000); 
		

