// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
    		
    		sessionStorage.setItem( "visitPage15", "visited" );
    		sessionStorage.setItem( "visitPage16", "unvisited" );
    		sessionStorage.setItem( "visitPage17", "unvisited" );
    		sessionStorage.setItem( "visitPage18", "unvisited" );
    		sessionStorage.setItem( "visitPage19", "unvisited" );
    		sessionStorage.setItem( "visitPage20", "unvisited" );
    		sessionStorage.setItem( "visitPage21", "unvisited" );
    		sessionStorage.setItem( "visitPage22", "unvisited" );
    		sessionStorage.setItem( "visitPage23", "unvisited" );
    		sessionStorage.setItem( "visitPage24", "unvisited" );
    		sessionStorage.setItem( "visitPage25", "unvisited" );  
    		sessionStorage.setItem( "visitPage26", "unvisited" );
    		sessionStorage.setItem( "visitPage27", "unvisited" );
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
		// SCORM 1.2
        // always set the status to incomplete
		oScorm.set( "cmi.core.lesson_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
		alert( "Welcome, " + oScorm.get( "cmi.core.student_name" ) + "!" );
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz

function visitCertificate()
{
	var learner_name = oScorm.get( "cmi.core.student_name" );
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "user-name" ).innerHTML = learner_name;
}

function reportScores( score )
{	
	oScorm.set("cmi.core.score.raw", score ); 
	oScorm.set("cmi.core.score.min", 0 ); 
	oScorm.set("cmi.core.score.max", 100 ); 
	oScorm.set( "cmi.core.lesson_status", "passed" );
	
	alert( "A score of " + score + " has been reported." );
	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}

function checkAllVisited()
{
	var page15 = sessionStorage.getItem( "visitPage15" );
	var page16 = sessionStorage.getItem( "visitPage16" );
	var page17 = sessionStorage.getItem( "visitPage17" );
	var page18 = sessionStorage.getItem( "visitPage18" );
	var page19 = sessionStorage.getItem( "visitPage19" );
	var page20 = sessionStorage.getItem( "visitPage20" );
	var page21 = sessionStorage.getItem( "visitPage21" );
	var page22 = sessionStorage.getItem( "visitPage22" );
	var page23 = sessionStorage.getItem( "visitPage23" );
	var page24 = sessionStorage.getItem( "visitPage24" );
	var page25 = sessionStorage.getItem( "visitPage25" );
	var page26 = sessionStorage.getItem( "visitPage26" );
	var page27 = sessionStorage.getItem( "visitPage27" );
	
	
	if ( page15 == "visited" && page16 == "visited" && page17 == "visited" && page18 == "visited" && page19 == "visited" 
		&& page20 == "visited" && page21 == "visited" && page22 == "visited" && page23 == "visited" && page24 == "visited" 
		&& page25 == "visited" && page26 == "visited" && page27 == "visited" )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "block";	
	}
}

function visitPage15()
{
	sessionStorage.setItem( "visitPage15", "visited" );
	checkAllVisited (); 
}

function visitPage16()
{
	sessionStorage.setItem( "visitPag16", "visited" );
	checkAllVisited ();
}

function visitPage17()
{
	sessionStorage.setItem( "visitPage17", "visited" );
	checkAllVisited ();
}

function visitPage18()
{
	sessionStorage.setItem( "visitPage18", "visited" );
	checkAllVisited ();
}

function visitPage19()
{
	sessionStorage.setItem( "visitPage19", "visited" );
	checkAllVisited ();
}

function visitPage20()
{
	sessionStorage.setItem( "visitPage20", "visited" );
	checkAllVisited (); 
}

function visitPage21()
{
	sessionStorage.setItem( "visitPage21", "visited" );
	checkAllVisited ();
}

function visitPage22()
{
	sessionStorage.setItem( "visitPage22", "visited" );
	checkAllVisited ();
}

function visitPage23()
{
	sessionStorage.setItem( "visitPage23", "visited" );
	checkAllVisited ();
}

function visitPage24()
{
	sessionStorage.setItem( "visitPage24", "visited" );
	checkAllVisited ();
}

function visitPage25()
{
	sessionStorage.setItem( "visitPage25", "visited" );
	checkAllVisited ();
}

function visitPage26()
{
	sessionStorage.setItem( "visitPage26", "visited" );
	checkAllVisited (); 
}

function visitPage27()
{
	sessionStorage.setItem( "visitPage27", "visited" );
	checkAllVisited ();
}



