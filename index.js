// Code your solution here!

const printString = (myString) => {
    console.log(myString[0])

    if ( myString.length > 1 ) {
        let mySubstring = myString.substring(1, myString.length);
        printString(mySubstring)
    } else {
        return true;
    }
}

printString("Hello World!")