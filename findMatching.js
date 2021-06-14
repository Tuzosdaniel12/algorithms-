var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,41,3,514]

var ramdomValue = stuff[ Math.floor( Math.random() * stuff.length ) ]

function findIndexValue( value ) {
	for (const [key, val] of stuff.entries()) {
	    if (value === val) {
			console.log("key", key);
		}
	}

	console.log("index", stuff.indexOf(ramdomValue));
}


findIndexValue(ramdomValue);