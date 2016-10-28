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
    		
    		sessionStorage.setItem( "visitPage01", "visited" );
    		sessionStorage.setItem( "visitPage02", "unvisited" );
    		sessionStorage.setItem( "visitPage03", "unvisited" );
    		sessionStorage.setItem( "visitPage04", "unvisited" );
    		sessionStorage.setItem( "visitPage05", "unvisited" );
    		sessionStorage.setItem( "visitPage06", "unvisited" );
    		sessionStorage.setItem( "visitPage07", "unvisited" );
    		sessionStorage.setItem( "visitPage08", "unvisited" );
    		sessionStorage.setItem( "visitPage09", "unvisited" );
    		sessionStorage.setItem( "visitPage10", "unvisited" );
    		sessionStorage.setItem( "visitPage11", "unvisited" );
    		sessionStorage.setItem( "visitPage12", "unvisited" );
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
	var page01 = sessionStorage.setItem( "visitPage01", "visited" );
	var page02 = sessionStorage.setItem( "visitPage02", "unvisited" );
	var page03 = sessionStorage.setItem( "visitPage03", "unvisited" );
	var page04 = sessionStorage.setItem( "visitPage04", "unvisited" );
	var page05 = sessionStorage.setItem( "visitPage05", "unvisited" );
	var page06 = sessionStorage.setItem( "visitPage06", "unvisited" );
	var page07 = sessionStorage.setItem( "visitPage07", "unvisited" );
	var page08 = sessionStorage.setItem( "visitPage08", "unvisited" );
	var page09 = sessionStorage.setItem( "visitPage09", "unvisited" );
	var	page10 = sessionStorage.setItem( "visitPage10", "unvisited" );
	var page11 = sessionStorage.setItem( "visitPage11", "unvisited" );
	var page12 = sessionStorage.setItem( "visitPage12", "unvisited" );
	
	if ( page01 == "visited" && page02 == "visited" && page03 == "visited" && page04 == "visited" && page05 == "visited" 
		&& page06 == "visited" && page07 == "visited" && page08 == "visited" && page09 == "visited" 
		&& page10 == "visited" && page11 == "visited" && page12 == "visited" )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";	
	}
}

function visitPage01()
{
	sessionStorage.setItem( "visitPage01", "visited" );
	checkAllVisited (); 
}

function visitPage02()
{
	sessionStorage.setItem( "visitPage02", "visited" );
	checkAllVisited (); 
}

function visitPage03()
{
	sessionStorage.setItem( "visitPage03", "visited" );
	checkAllVisited (); 
}

function visitPage04()
{
	sessionStorage.setItem( "visitPage04", "visited" );
	checkAllVisited (); 
}

function visitPage05()
{
	sessionStorage.setItem( "visitPage05", "visited" );
	checkAllVisited (); 
}

function visitPage06()
{
	sessionStorage.setItem( "visitPage06", "visited" );
	checkAllVisited (); 
}

function visitPage07()
{
	sessionStorage.setItem( "visitPage07", "visited" );
	checkAllVisited (); 
}

function visitTopic08()
{
	sessionStorage.setItem( "visitPage08", "visited" );
	checkAllVisited (); 
}

function visitPage09()
{
	sessionStorage.setItem( "visitPage09", "visited" );
	checkAllVisited (); 
}

function visitPage10()
{
	sessionStorage.setItem( "visitPage10", "visited" );
	checkAllVisited (); 
}

function visitPage11()
{
	sessionStorage.setItem( "visitPage11", "visited" );
	checkAllVisited (); 
}

function visitPage12()
{
	sessionStorage.setItem( "visitPage12", "visited" );
	checkAllVisited (); 
}


