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
    		
    		sessionStorage.setItem( "visitPage1", "visited" );
    		sessionStorage.setItem( "visitPage2", "unvisited" );
    		sessionStorage.setItem( "visitPage3", "unvisited" );
    		sessionStorage.setItem( "visitPage4", "unvisited" );
    		sessionStorage.setItem( "visitPage5", "unvisited" );
    		sessionStorage.setItem( "visitPage6", "unvisited" );
    		sessionStorage.setItem( "visitPage7", "unvisited" );
    		sessionStorage.setItem( "visitPage8", "unvisited" );
    		sessionStorage.setItem( "visitPage9", "unvisited" );
    		sessionStorage.setItem( "visitPage10", "unvisited" );
    		sessionStorage.setItem( "visitPage25", "unvisited" );   	
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

function reportScores( score )
{	
	oScorm.set("cmi.core.score.raw", score ); 
	oScorm.set("cmi.core.score.min", 0 ); 
	oScorm.set("cmi.core.score.max", 100 ); 
	oScorm.set( "cmi.core.lesson_status", "passed" );
	
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
	var page1 = sessionStorage.getItem( "visitPage1" );
	var page2 = sessionStorage.getItem( "visitPage2" );
	var page3 = sessionStorage.getItem( "visitPage3" );
	var page4 = sessionStorage.getItem( "visitPage4" );
	var page5 = sessionStorage.getItem( "visitPage5" );
	var page6 = sessionStorage.getItem( "visitPage6" );
	var page7 = sessionStorage.getItem( "visitPage7" );
	var page8 = sessionStorage.getItem( "visitPage8" );
	var page9 = sessionStorage.getItem( "visitPage9" );
	var page10 = sessionStorage.getItem( "visitPage10" );
	
	
	if ( page1 == "visited" && page2 == "visited" && page3 == "visited" && page4 == "visited" && page5 == "visited" 
		&& page6 == "visited" && page7 == "visited" && page8 == "visited" && page9 == "visited" && page10 == "visited" ) 
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "block";	
	}
}

function visitPage1()
{
	sessionStorage.setItem( "visitPage1", "visited" );
	checkAllVisited (); 
}

function visitPage2()
{
	sessionStorage.setItem( "visitPage2", "visited" );
	checkAllVisited ();
}

function visitPage3()
{
	sessionStorage.setItem( "visitPage3", "visited" );
	checkAllVisited ();
}

function visitPage4()
{
	sessionStorage.setItem( "visitPage4", "visited" );
	checkAllVisited ();
}

function visitPage5()
{
	sessionStorage.setItem( "visitPage5", "visited" );
	checkAllVisited ();
}

function visitPage6()
{
	sessionStorage.setItem( "visitPage6", "visited" );
	checkAllVisited (); 
}

function visitPage7()
{
	sessionStorage.setItem( "visitPage7", "visited" );
	checkAllVisited ();
}

function visitPage8()
{
	sessionStorage.setItem( "visitPage8", "visited" );
	checkAllVisited ();
}

function visitPage9()
{
	sessionStorage.setItem( "visitPage9", "visited" );
	checkAllVisited ();
}

function visitPage10()
{
	sessionStorage.setItem( "visitPage10", "visited" );
	checkAllVisited ();
}


