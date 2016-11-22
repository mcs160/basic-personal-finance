function processForm()
{
 var score = 0;

 var numberCorrect = 0;
	
 var q1 = document.forms.quiz2.question1;
 
 if( q1 [ 0 ].checked )
{
 numberCorrect = numberCorrect + 1;
}
 
 var q2 = document.forms.quiz2.question2;	

 if( q2 [ 0 ].checked )
{	
	numberCorrect = numberCorrect + 1;
}
		 
 var q3 = document.forms.quiz2.question3;	
		 
if( q3 [ 2 ].checked )
{
	numberCorrect = numberCorrect + 1;
}

var q4 = document.forms.quiz2.question4;	

if( q4 [ 0 ].checked )
{	
	numberCorrect = numberCorrect + 1;
}
		 
var q5 = document.forms.quiz2.question5;	
		 
if( q5 [ 1 ].checked )
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