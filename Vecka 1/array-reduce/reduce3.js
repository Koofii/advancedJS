// Räkna medelantal per hushåll samt standardavvikelser.

const data = [
    1,
    1,
    3,
    2,
    2,
    4,
    2,
    1,
    1,
    1
];

const meanReducer = (accumulator, currentValue, currentIndex, array) => {
    const currentSum = accumulator + currentValue;
    
    if (currentIndex === array.length - 1){
        return currentSum / array.length;
    }
    return currentSum;
}

const mean = data.reduce(meanReducer, 0);
console.log(mean)