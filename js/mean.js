/**
 * @param {Array<number>} array
 * @returns {number}
 */
export default function mean(array) {
    const length = array.length;
    const totalSum = array.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    const result = totalSum / length;
    return result;
}

const result = mean([1, 2, 3, 4, 5]);
console.log("Mean: ", result);