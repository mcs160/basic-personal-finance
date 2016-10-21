//

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
    		
    		sessionStorage.setItem( "visitTopic15", "unvisited" );
    		sessionStorage.setItem( "visitTopic16", "unvisited" );
    		sessionStorage.setItem( "visitTopic17", "unvisited" );
    		sessionStorage.setItem( "visitTopic18", "unvisited" );
    		sessionStorage.setItem( "visitTopic19", "unvisited" );
    		sessionStorage.setItem( "visitTopic20", "unvisited" );
    		sessionStorage.setItem( "visitTopic21", "unvisited" );
    		sessionStorage.setItem( "visitTopic22", "unvisited" );
    		sessionStorage.setItem( "visitTopic23", "unvisited" );
    		sessionStorage.setItem( "visitTopic24", "unvisited" );
    		sessionStorage.setItem( "visitTopic25", "unvisited" );
    		sessionStorage.setItem( "visitTopic26", "unvisited" );
    		sessionStorage.setItem( "visitTopic27", "unvisited" );
    	
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
function reportScores()
{	
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
	var topic15 = sessionStorage.getItem( "visitTopic15" );
	var topic16 = sessionStorage.getItem( "visitTopic16" );
	var topic17 = sessionStorage.getItem( "visitTopic17" );
	var topic18 = sessionStorage.getItem( "visitTopic18" );
	var topic19 = sessionStorage.getItem( "visitTopic19" );
	var topic20 = sessionStorage.getItem( "visitTopic20" );
	var topic21 = sessionStorage.getItem( "visitTopic21" );
	var topic22 = sessionStorage.getItem( "visitTopic22" );
	var topic23 = sessionStorage.getItem( "visitTopic23" );
	var topic24 = sessionStorage.getItem( "visitTopic24" );
	var topic25 = sessionStorage.getItem( "visitTopic25" );
	var topic26 = sessionStorage.getItem( "visitTopic26" );
	var topic27 = sessionStorage.getItem( "visitTopic27" );
	
	
	if ( topic15 == "visited" && topic16 == "visited" && topic17 == "visited" && topic18 == "visited" && topic19 == "visited" 
		&& topic20 == "visited" && topic21 == "visited" && topic22 == "visited" && topic23 == "visited" && topic24 == "visited" 
		&& topic25 == "visited" && topic26 == "visited" && topic27 == "visited" )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";	
	}
}

function visitTopic15()
{
	sessionStorage.setItem( "visitTopic15", "visited" );
	checkAllVisited (); 
}

function visitTopic16()
{
	sessionStorage.setItem( "visitTopic16", "visited" );
	checkAllVisited ();
}

function visitTopic17()
{
	sessionStorage.setItem( "visitTopic17", "visited" );
	checkAllVisited ();
}

function visitTopic18()
{
	sessionStorage.setItem( "visitTopic18", "visited" );
	checkAllVisited ();
}

function visitTopic19()
{
	sessionStorage.setItem( "visitTopic19", "visited" );
	checkAllVisited ();
}

function visitTopic20()
{
	sessionStorage.setItem( "visitTopic20", "visited" );
	checkAllVisited (); 
}

function visitTopic21()
{
	sessionStorage.setItem( "visitTopic21", "visited" );
	checkAllVisited ();
}

function visitTopic22()
{
	sessionStorage.setItem( "visitTopic22", "visited" );
	checkAllVisited ();
}

function visitTopic23()
{
	sessionStorage.setItem( "visitTopic23", "visited" );
	checkAllVisited ();
}

function visitTopic24()
{
	sessionStorage.setItem( "visitTopic24", "visited" );
	checkAllVisited ();
}

function visitTopic25()
{
	sessionStorage.setItem( "visitTopic25", "visited" );
	checkAllVisited (); 
}

function visitTopic26()
{
	sessionStorage.setItem( "visitTopic26", "visited" );
	checkAllVisited ();
}

function visitTopic27()
{
	sessionStorage.setItem( "visitTopic27", "visited" );
	checkAllVisited ();
}

