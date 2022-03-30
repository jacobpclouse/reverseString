// simple reverse string
// NOTE - need to change out how i unshift chars

function reverseStringFunc(inputString) {
	// get length of incoming string
	lengthString = inputString.length
	
	// initializing output to return
	reversedOutput = ''
	
	// using for loop to reverse string
	for (i = 0; i < lengthString; i++) {
		reversedOutput.unshift(inputString[i])
	}
	
	// returning output
	return reversedOutput
}


// testing
string1 = "I can't say I blame them () this is the () first time () we seen this!"

reverseStringFunc(string1)