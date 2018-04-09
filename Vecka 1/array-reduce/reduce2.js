//Antal residenter i varje hushåll

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

const reducer = (frequencies, dataPoint) => {
    if (!frequencies[dataPoint]){
        frequencies[dataPoint] = 1;
    } else{
        frequencies[dataPoint]++;
    }
    return frequencies;
}

const frequenceTable = data.reduce(reducer, {}); //"CurrentValue" har vi satt som ett tomt objekt.
console.log(frequenceTable)