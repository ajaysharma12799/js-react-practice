/**
 * @param {number} [initialValue=0]
 * @returns {() => number}
 */
export default function makeCounter(initialValue = 0) {
    return function () {
        return initialValue++;
    }
}

const counter = makeCounter(5);

console.log(counter());
console.log(counter());