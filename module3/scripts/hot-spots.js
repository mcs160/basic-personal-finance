
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 1";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 2";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 3";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 4";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 5";
	}
	else if( number == 6 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 6";
	}
	else if( number == 7 )
	{
		document.getElementById( "output-text" ).innerHTML = "test 7";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}