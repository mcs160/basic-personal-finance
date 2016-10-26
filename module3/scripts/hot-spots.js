
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "A request for an extension of credit including all pertinent personal information needed for lender to make a credit determination.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "A measure that attempts to calculate what percentage of principle (borrowed amount) you'll pay annually considering all interest and fees.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "The maximum amount of credit a financial institution extends through a line of credit or on a credit card.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "A time period after the due date in which no late fees are charged and which does not result in default or cancellation of extended credit.";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "A monetary amount chard autimatically on a yearly basis for the use of a credit card seperate from interest on purchases.";
	}
	else if( number == 6 )
	{
		document.getElementById( "output-text" ).innerHTML = "The failure to pay interest or principal on a loan when due.";
	}
	else if( number == 7 )
	{
		document.getElementById( "output-text" ).innerHTML = "The seizure of collateral (usually real estate) for nonpayment.  This process will be outlined in applicable loan documentation.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}