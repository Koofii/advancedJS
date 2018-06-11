export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
    if (b === 0){
        throw new TypeError('Denominator cannt be zero')
    }
    return a / b;
}