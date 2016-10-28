var heading = new Array( "Income", "Spending", "Debit Card", "Checks", "Debit Card" );

var caption = new Array( "Determine your monthly income.", "Track spending each month, such as bills and regularly purchase items.", "Categorize spending, such as savings, housing, utilities, transportation, food, clothing, entertainment, etc.", "Calculate what you currently spend on each item as a percentage of monthly income.", "Then determine your priorities. How much of your income do you want to spend on certain categories?", "Keep track of your transactions and regularly review your bank statements.", "Staying on track with your spending plan is a great way to manage your money. You should have a good idea of where your money goes and how much you actually have." );

var pics = new Array( "images/budgeting-1.jpg", "images/budgeting-2.jpg", "images/budgeting-3.jpg", "images/budgeting-2.jpg", "images/budgeting-3.jpg" );

var alt = new Array( "Direct Deposit", "Checks", "Debit Card", "Checks", "Debit Card" );

var title = new Array( "Direct Deposit", "Checks", "Debit Card", "Checks", "Debit Card" );

var index = 0;

function goNext()
{
	index = index + 1;
	
	if( index == 3 )
	{
		index = 2;
		}

	document.getElementById( "heading" ).innerHTML = heading[ index ];
	document.getElementById( "caption" ).innerHTML = caption[ index ];
	document.getElementById( "pics" ).src = pics[ index ];
	document.getElementById( "pics" ).alt = alt[ index ];
	document.getElementById( "pics" ).title = title[ index ];
}

function goBack()
{
	index = index - 1;
	
	if( index == -1 )
	{
		index = 0;
	}

	document.getElementById( "heading" ).innerHTML = heading[ index ];
	document.getElementById( "caption" ).innerHTML = caption[ index ];
	document.getElementById( "pics" ).src = pics[ index ];
	document.getElementById( "pics" ).alt = alt[ index ];
	document.getElementById( "pics" ).title = title[ index ];
}

function changeMe( swapValue )
{
	index = swapValue;
	
	document.getElementById( "heading" ).innerHTML = heading[ index ];
	document.getElementById( "caption" ).innerHTML = caption[ index ];
	document.getElementById( "pics" ).src = pics[ index ];
	document.getElementById( "pics" ).alt = alt[ index ];
	document.getElementById( "pics" ).title = title[ index ];
}



