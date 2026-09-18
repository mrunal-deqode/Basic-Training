// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let max = array[0];
  let secmax = 0;

  for(let i = 1; i < array.length; i++){
    if(array[i] > max){
      secmax = max;
      max = array[i];
    } else if(array[i] > secmax){
      secmax = array[i];
    }
  }

  return secmax;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    let frq = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char >= "a" && char <= "z") {

            if (frq[char] === undefined) {
                frq[char] = 1;
            } else {
                frq[char]++;
            }
        }
    }

    return frq;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
    let unflatten = {};

    function flattenObject(object, parentKey) {
        for (let key in object) {
            let newKey;

            if (parentKey === "") {
                newKey = key;
            } else {
                newKey = parentKey + "." + key;
            }

            if (typeof object[key] === "object" && object[key] !== null) {
                flattenObject(object[key], newKey);
            } else {
                unflatten[newKey] = object[key];
            }
        }
    }

    flattenObject(unflatObject, "");

    return unflatten;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
    let flatten = {};

    for (let key in flatObject) {
        let parts = key.split(".");
        let current = flatten;

        for (let i = 0; i < parts.length - 1; i++) {
            let part = parts[i];
            let nextPart = parts[i + 1];

            if (current[part] === undefined) {
                if (!isNaN(nextPart)) {
                    current[part] = [];
                } else {
                    current[part] = {};
                }
            }
            current = current[part];
        }
        let lastPart = parts[parts.length - 1];
        current[lastPart] = flatObject[key];
    }
  
    return flatten;
}
