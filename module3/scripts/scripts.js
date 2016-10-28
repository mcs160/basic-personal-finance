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
    		
    		sessionStorage.setItem( "visitPage29", "visited" );
    		sessionStorage.setItem( "visitPage30", "unvisited" );
    		sessionStorage.setItem( "visitPage31", "unvisited" );
    		sessionStorage.setItem( "visitPage32", "unvisited" );
    		sessionStorage.setItem( "visitPage33", "unvisited" );
    		sessionStorage.setItem( "visitPage34", "unvisited" );
    		sessionStorage.setItem( "visitPage35", "unvisited" );
    		sessionStorage.setItem( "visitPage36", "unvisited" );
    		sessionStorage.setItem( "visitPage37", "unvisited" );
    		sessionStorage.setItem( "visitPage38", "unvisited" );
    		sessionStorage.setItem( "visitPage39", "unvisited" );
    		sessionStorage.setItem( "visitPage40", "unvisited" );
    		sessionStorage.setItem( "visitPage41", "unvisited" );
    	
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
	var page29 = sessionStorage.getItem( "visitPage29" );
	var page30 = sessionStorage.getItem( "visitPage30" );
	var page31 = sessionStorage.getItem( "visitPage31" );
	var page32 = sessionStorage.getItem( "visitPage32" );
	var page33 = sessionStorage.getItem( "visitPage33" );
	var page34 = sessionStorage.getItem( "visitPage34" );
	var page35 = sessionStorage.getItem( "visitPage35" );
	var page36 = sessionStorage.getItem( "visitPage36" );
	var page37 = sessionStorage.getItem( "visitPage37" );
	var page38 = sessionStorage.getItem( "visitPage38" );
	var page39 = sessionStorage.getItem( "visitPage39" );
	var page40 = sessionStorage.getItem( "visitPage40" );
	var page41 = sessionStorage.getItem( "visitPage41" );
	
	
	if ( page29 == "visited" && page30 == "visited" && page31 == "visited" && page32 == "visited" && page33 == "visited" 
		&& page34 == "visited" && page35 == "visited" && page36 == "visited" && page37 == "visited" && page38 == "visited" 
		&& page39 == "visited" && page40 == "visited" && page41 == "visited" )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";	
	}
}

function visitPage29()
{
	sessionStorage.setItem( "visitPage29", "visited" );
	checkAllVisited (); 
}

function visitPage30()
{
	sessionStorage.setItem( "visitPage30", "visited" );
	checkAllVisited ();
}

function visitPage31()
{
	sessionStorage.setItem( "visitPage31", "visited" );
	checkAllVisited ();
}

function visitPage32()
{
	sessionStorage.setItem( "visitPage32", "visited" );
	checkAllVisited ();
}

function visitPage33()
{
	sessionStorage.setItem( "visitPage33", "visited" );
	checkAllVisited ();
}

function visitPage34()
{
	sessionStorage.setItem( "visitPage34", "visited" );
	checkAllVisited (); 
}

function visitPage35()
{
	sessionStorage.setItem( "visitPage35", "visited" );
	checkAllVisited ();
}

function visitPage36()
{
	sessionStorage.setItem( "visitPage36", "visited" );
	checkAllVisited ();
}

function visitPage37()
{
	sessionStorage.setItem( "visitPage37", "visited" );
	checkAllVisited ();
}

function visitPage38()
{
	sessionStorage.setItem( "visitPage38", "visited" );
	checkAllVisited ();
}

function visitPage39()
{
	sessionStorage.setItem( "visitPage39", "visited" );
	checkAllVisited (); 
}

function visitPage40()
{
	sessionStorage.setItem( "visitPage40", "visited" );
	checkAllVisited ();
}

function visitPage41()
{
	sessionStorage.setItem( "visitPage41", "visited" );
	checkAllVisited ();
}

