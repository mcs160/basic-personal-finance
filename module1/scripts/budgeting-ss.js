var heading = new Array( "Income", "Expenditures", "Calculate", "Prioritize", "Balance", "On Track" );

var caption = new Array( "Determine your monthly income, or the amount of money that is deposited into your account each month.", "Track your spending, or expenditures, each month, such as bills and regularly purchased items.", "Categorize your spending, such as savings, housing, utilities, transportation, food, clothing, schooling, entertainment, etc. Then calulate the percentage of your monthly income each category uses in order to better understand where your money goes.", "Next determine your priorities. How much of your income do you want to spend on certain categories?", "Keep track of your transactions and regularly balance your account and review your bank statements.", "Staying on track with your spending plan is a great way to manage your money. You should have a good idea of where your money goes and how much you actually have." );

var pics = new Array( "images/budgeting-1.jpg", "images/budgeting-2.jpg", "images/budgeting-3.jpg", "images/budgeting-4.jpg", "images/budgeting-5.jpg", "images/budgeting-6.jpg" );

var alt = new Array(  "Income", "Expenditures", "Calculate", "Prioritize", "Balance", "On Track"  );

var title = new Array(  "Income", "Expenditures", "Calculate", "Prioritize", "Balance", "On Track"  );

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



