var heading = new Array( "Balance", "Review", "Monitor", "Transfer", "Deposit", "Bill Pay" );

var caption = new Array( "Check your balance online.", "Review transactions and account statements.", "Monitor and confirm all transactions.", "Transfer funds between accounts.", "Deposit funds into accounts using mobile apps.", "Pay bills online electronically, schedule recurring payments, and view your payment history." );

var pics = new Array( "images/online-banking1.jpg", "images/online-banking2.jpg", "images/online-banking3.jpg", "images/online-banking4.jpg", "images/online-bnaking5.jpg", "images/online-banking6.jpg" );

var alt = new Array( "Balance", "Review", "Monitor", "Transfer", "Deposit", "Bill Pay" );

var title = new Array("Balance", "Review", "Monitor", "Transfer", "Deposit", "Bill Pay" );

var index = 0;

function goNext()
{
	index = index + 1;
	
	if( index == 7 )
	{
		index = 6;
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



