var heading = new Array( "Deposit", "Withdrawal", "ATM" );

var caption = new Array(  "When depositing money at a bank, fill out a deposit slip found at the bank or in the back of your checkbook. Your deposit slip must have the correct account number, date, and the correct currency. Cash and coins need to be separate from checks, and each check should be listed separately and endorsed. Calculate the total deposit, and indicate if you would like cash back.",
		"In order to make a withdrawal at a teller within your bank, you must complete a withdrawal slip found at the bank or in the back of your checkbook. Make sure your withdrawal slip has the correct account number, date, and amount you wish to withdraw.", 
		"Withdrawals may also be completed from your savings account using your ATM or debit card. Insert or slide your card, depending on the machine, enter your Personal Identification Number (PIN), and select the account from which you wish to withdrawal funds. You can also use the ATM machine to check your balance, transfer funds, and in some cases, make deposits. " );

var pics = new Array( "images/savings-1.jpg", "images/savings-2.jpg", "images/savings-3.jpg" );

var alt = new Array( "Deposit", "Withdrawal", "ATM" );

var title = new Array( "Deposit", "Withdrawal", "ATM" );

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