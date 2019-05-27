let inputs = [
  "",
  "abc",
  "123",
  "monkey",
  "bird"


]

let outputs = [
  undefined,
  "a",
  "1",
  "m",
  "b",

  
]
function f(str) { if (inputs[0] == "") {return undefined
} else {return inputs[0]
  }
}
runTest(0));
runTest(1);
runTest(2);
runTest(3);
runTest(4);