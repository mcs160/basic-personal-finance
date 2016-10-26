var heading = new Array( "Deposit", "Withdrawal", "ATM" );

var caption = new Array(  "You must fill out a deposit slip to make a deposit at a bank in person. These can be found at the bank or in the back of your checkbook. Make sure your deposit slip has the correct account number, date, and the correct currency. Cash and coins need to be separate from checks, and each check should be listed separately and endorsed. Calculate the total deposit, and indicate if you would like cash back.",
		"You must complete a withdrawal slip to make a withdrawal at a bank in person. These can be found at the bank or in the back of your checkbook. Make sure your withdrawal slip has the correct account number, date, and amount you wish to withdrawal.", 
		"You can also withdrawal money from your savings account using your ATM or debit card. Insert or slide your card, depending on the machine, enter your Personal Identification Number (PIN), and select which account you wish to withdrawal funds. You can also use the ATM machine to check your balance, transfer funds, and in some cases, make deposits. " );

var pics = new Array( "images/deposit.jpg", "images/withdrawal.jpg", "images/atm-machine.jpg" );

var alt = new Array( "Deposit", "Withdrawal", "ATM" );

var title = new Array( "Deposit", "Withdrawal", "ATM" );
var index = 0;

function goNext()
{
	index = index + 1;
	
	if( index == 4 )
	{
		index = 3;
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