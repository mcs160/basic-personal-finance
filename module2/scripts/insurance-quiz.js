function processForm()
{
 var numberCorrect = 0;
	
 var q1 = document.forms.quiz1.question1;
 
 if( q1 [ 2 ].checked )
{
 numberCorrect = numberCorrect + 1;
}
 
 var q2 = document.forms.quiz1.question2;	

 if( q2 [ 1 ].checked )
{	
	numberCorrect = numberCorrect + 1;
}
		 
 var q3 = document.forms.quiz1.question3;	
		 
if( q3 [ 0 ].checked )
{
	numberCorrect = numberCorrect + 1;
}

var q4 = document.forms.quiz1.question4;	

if( q4 [ 2 ].checked )
{	
	numberCorrect = numberCorrect + 1;
}
		 
var q5 = document.forms.quiz1.question5;	
		 
if( q5 [ 2 ].checked )
{
	numberCorrect = numberCorrect + 1;
}
		 
 var score = numberCorrect/ 5 * 100;	

if ( score >= 70 )
{
	alert ("Congratulations, you pass!");
	location.assign("insurance-certificate.html");
}

else
{
	alert ("Please reset the quiz and try again!");		
}

parent.reportScores( score );
}