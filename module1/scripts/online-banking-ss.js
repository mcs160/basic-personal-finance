var heading = new Array( "Balance", "Monitor", "Transfer", "Deposit", "Bill Pay" );

var caption = new Array( "Online banking allows you to quickly check your balance uisng your desktop computer, laptop, tablet, or mobile phone.", "It is also convenient to monitor and confirm all checking, savings, credit, debit, and ATM transactions online.", "Online banking allows you to easily transfer funds between accounts using almost any internet connected device.", "Depositing funds into accounts is easy with online banking, thanks to mobile apps.", "Online banking also allows you to use online bill pay, pay your bills electronically, schedule recurring payments, and view your payment history." );

var pics = new Array( "images/online-banking1.jpg", "images/online-banking2.jpg", "images/online-banking4.jpg", "images/online-banking5.jpg", "images/online-banking6.jpg" );

var alt = new Array( "Balance", "Monitor", "Transfer", "Deposit", "Bill Pay" );

var title = new Array("Balance", "Monitor", "Transfer", "Deposit", "Bill Pay" );

var index = 0;

function goNext()
{
	index = index + 1;
	
	if( index == 6 )
	{
		index = 5;
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



