var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["foe", 2]
    ["fum", 6],
    ["bing", 3]
    ["where", 2],
    ["aAAaAa", -3],
    ["zoob",-2],
    ["bAzINnGA",8]

  
]

let outputs = [
    "foefoe",
    "fumfumfumfumfumfum",
    "bingbingbing",
    "wherewhere",
    "",
    "",
    "bAzINnGAbAzINnGAbAzINnGAbAzINnGAbAzINnGAbAzINnGAbAzINnGAbAzINnGA"



  
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(str, n) {
    if (isNaN(str) || isNaN(n)) {
        return undefined;
    } else if (Math.sign(n) == -1 || Math.sign(n) == 0){
        console.log("heyheyhey, str");
        return "";
    console.log("yoyoyoyoyo",str);    
    } else if (typeof str === "string"){
        return str.repeat(n);
    } else if (typeof str === "number") {
        return undefined;
    }

    }
    


function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);

