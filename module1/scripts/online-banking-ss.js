var heading = new Array( "OB 1", "OB 2", "OB 3", "OB 4", "OB 5", "OB 6" );

var caption = new Array(  "OB caption 1", "OB caption 2", "OB caption 3", "OB caption 4", "OB caption 5", "OB caption 6" );

var pics = new Array( "images/ob-a.jpg", "images/ob-b.jpg", "images/ob-c.jpg", "images/ob-d.jpg", "images/ob-e.jpg", "images/ob-f.jpg" );

var alt = new Array( "OB A", "OB B", "OB C", "OB D", "OB E", "OB F"  );

var title = new Array( "OB A", "OB B", "OB C", "OB D", "OB E", "OB F" );
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



