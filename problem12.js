var assert = require('assert');

// we need 5 test cases. 
let inputs = [ [[1,2,3,4,5],[9,8,3,6]],
    [[1,3,4,5,6][1,3,4,5,8,6]],
    [["boat","bus","tree"], [["green","dog,","boat"]]]
    ,
  
]

let outputs = [[1,2,4,5,8,9,6],
  
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
var newArr =[];

function f(arr1, arr2) {
    
    for (var i = 0; i < arr1.length; i++) {
        for ( var j = 0; j < arr2[i]; j++ ) {
            if (arr1[j] != arr2[i]) {newArr.push(arr1[j]);
            }  
        } 
    }
    return newArr;
    console.log(newArr);
}
console.log(newArr);
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

