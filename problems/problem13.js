var assert = require('assert');

// we need 5 test cases. 
let inputs = ["racecar",
             "oogoo",
             "zangazanga",
             "boottoob",
             "oke2doke343"
  
]

let outputs = [
    true,
    true,
    false,
    true,
    false
  
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    var cleanstr = str.replace(/[^a-z/]/ig, "").toLowerCase();
    

    var invertedstr = cleanstr.split("").reverse().join("");
    
    return cleanstr === invertedstr;
        
}

function runTest(i) {
    
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(expected, actual);
}


runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

