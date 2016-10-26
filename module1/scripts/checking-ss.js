var heading = new Array( "Direct Deposit", "Checks", "Debit Card" );

var caption = new Array( "While you can use deposit and withdrawal slips for checking accounts, direct deposit is also a convenient option. This allows employers to electronically deposit your paycheck into your checking account so your funds are immediately available.", "Checks can be used to make purchases or pay bills. Make sure your check has the correct amount written numerically and in words, the correct person or company you want to pay, and your signature. Funds do not immediately come out of your account when you write a check, so it is important to keep a register of your transactions. It is against the law to write a check with insufficient funds in your account, or a hot check.", "When you use a debit card, the funds come straight from your checking account. You can make purchases in person, over the phone or online, get cash from the ATM machine, or pay bills automatically. While an ATM card is PIN-based and limited to use at the ATM machine, a debit card has a Visa® or Mastercard® logo, which is acceptable with most retailers. A debit card is not a credit card, and you can use your signature or your PIN for purchases." );

var pics = new Array( "images/checking-1.jpg", "images/checking-2.jpg", "images/checking-3.jpg" );

var alt = new Array( "Direct Deposit", "Checks", "Debit Card"  );

var title = new Array( "Direct Deposit", "Checks", "Debit Card"  );

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



