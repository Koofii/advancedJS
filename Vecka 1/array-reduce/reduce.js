//REDUCER

const data = [1, 2, 3];

const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const result = data.reduce(reducer, 0);
