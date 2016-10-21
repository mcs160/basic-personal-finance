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
    		
    		sessionStorage.setItem( "visitTopic29", "unvisited" );
    		sessionStorage.setItem( "visitTopic30", "unvisited" );
    		sessionStorage.setItem( "visitTopic31", "unvisited" );
    		sessionStorage.setItem( "visitTopic32", "unvisited" );
    		sessionStorage.setItem( "visitTopic33", "unvisited" );
    		sessionStorage.setItem( "visitTopic34", "unvisited" );
    		sessionStorage.setItem( "visitTopic35", "unvisited" );
    		sessionStorage.setItem( "visitTopic36", "unvisited" );
    		sessionStorage.setItem( "visitTopic37", "unvisited" );
    		sessionStorage.setItem( "visitTopic38", "unvisited" );
    		sessionStorage.setItem( "visitTopic39", "unvisited" );
    		sessionStorage.setItem( "visitTopic40", "unvisited" );
    		sessionStorage.setItem( "visitTopic41", "unvisited" );
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
	var topic29 = sessionStorage.getItem( "visitTopic29" );
	var topic30 = sessionStorage.getItem( "visitTopi30" );
	var topic31 = sessionStorage.getItem( "visitTopic31" );
	var topic32 = sessionStorage.getItem( "visitTopic32" );
	var topic33 = sessionStorage.getItem( "visitTopic33" );
	var topic34 = sessionStorage.getItem( "visitTopic34" );
	var topic35 = sessionStorage.getItem( "visitTopic35" );
	var topic36 = sessionStorage.getItem( "visitTopic36" );
	var topic37 = sessionStorage.getItem( "visitTopic37" );
	var topic38 = sessionStorage.getItem( "visitTopic38" );
	var topic39= sessionStorage.getItem( "visitTopic39" );
	var topic40 = sessionStorage.getItem( "visitTopic40" );
	var topic41 = sessionStorage.getItem( "visitTopic41" );
	
	if ( topic29 == "visited" && topic30 == "visited" && topic31 == "visited" && topic32 == "visited" && topic33 == "visited" 
		&& topic34 == "visited" && topic35 == "visited" && topic36 == "visited" && topic37 == "visited" && topic38 == "visited") 
		&& topic39 == "visited" && topic40 == "visited" && topic41 == "visited" )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";	
	}
}

function visitTopic29()
{
	sessionStorage.setItem( "visitTopic29", "visited" );
	checkAllVisited (); 
}

function visitTopic30()
{
	sessionStorage.setItem( "visitTopic30", "visited" );
	checkAllVisited ();
}

function visitTopic31()
{
	sessionStorage.setItem( "visitTopic31", "visited" );
	checkAllVisited ();
}

function visitTopic32()
{
	sessionStorage.setItem( "visitTopic32", "visited" );
	checkAllVisited ();
}

function visitTopic33()
{
	sessionStorage.setItem( "visitTopic33", "visited" );
	checkAllVisited ();
}

function visitTopic34()
{
	sessionStorage.setItem( "visitTopic34", "visited" );
	checkAllVisited (); 
}

function visitTopic35()
{
	sessionStorage.setItem( "visitTopic35", "visited" );
	checkAllVisited ();
}

function visitTopic36()
{
	sessionStorage.setItem( "visitTopic36", "visited" );
	checkAllVisited ();
}

function visitTopic37()
{
	sessionStorage.setItem( "visitTopic37", "visited" );
	checkAllVisited ();
}

function visitTopic38()
{
	sessionStorage.setItem( "visitTopic38", "visited" );
	checkAllVisited ();
}
function visitTopic39()
{
	sessionStorage.setItem( "visitTopic39", "visited" );
	checkAllVisited (); 
}

function visitTopic40()
{
	sessionStorage.setItem( "visitTopic40", "visited" );
	checkAllVisited ();
}

function visitTopic41()
{
	sessionStorage.setItem( "visitTopic41", "visited" );
	checkAllVisited ();
}