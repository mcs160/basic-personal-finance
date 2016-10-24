
var heading = new Array( "Insurance Policy", "Car Accident", "House Fire", "Funeral", "Indemnification" );

var caption = new Array( "Insurance Policy", "Car Accident", "House Fire", "Funeral", "Indemnification" );

var image = new Array( "images/insurance-policy v2.jpg", "images/car accident v2.jpg", "images/house fire v2.jpg", "images/funeral v2.jpg", "images/Damages v2.jpg" );

var alt = new Array( "Insurance Policy", "Car Accident", "House Fire", "Funeral", "Indemnification" );

var title = new Array( "Insurance Policy", "Car Accident", "House Fire", "Funeral", "Indemnification" );


var index = 0;


function goNext()
{
	index = index + 1; 
	
	if( index == 5)
	{
		index = 4;
	}
	
	document.getElementById( "heading" ).innerHTML = heading[ index ];
	document.getElementById( "caption" ).innerHTML = caption[ index ];
	document.getElementById( "image" ).src = image[ index ];
	document.getElementById( "image" ).alt = alt[ index ];
	document.getElementById( "image" ).title = title[ index ];
}


function goBack()
{
	index = index -1;
	
	if( index == -1 )
		{
		index = 0;
		}
	document.getElementById( "heading" ).innerHTML = heading[ index ];
	document.getElementById( "caption" ).innerHTML = caption[ index ];
	document.getElementById( "image" ).src = image[ index ];
	document.getElementById( "image" ).alt = alt[ index ];
	document.getElementById( "image" ).title = title[ index ];
}


function changeMe( swapValue )
{
	index = swapValue;

	document.getElementById( "heading" ).innerHTML = heading[ index ];
	document.getElementById( "caption" ).innerHTML = caption[ index ];
	document.getElementById( "image" ).src = image[ index ];
	document.getElementById( "image" ).alt = alt[ index ];
	document.getElementById( "image" ).title = title[ index ];
}





