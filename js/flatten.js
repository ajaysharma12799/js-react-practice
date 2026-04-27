/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    const result = [];
    value.forEach((element) => {
        if (Array.isArray(element)) {
            console.log("element: ", element);
            // Push array elements into result array
            result.push(...flatten(element));
        } else {
            result.push(element);
        }
    });
    return result;
}

const result = flatten([1, [2, [3, [4, [5]]]]]);
console.log("Final Result: ", result);


/**
 * Test cases
 
 
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]


*/