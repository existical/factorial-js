const factorial = function (targetFact, options) {

    options = {
        ...options
    };
    const {
        array
    } = options;

    let mS = [1];
    let i, currentFact;
    let result = '';

    for (currentFact = 1; currentFact <= targetFact; currentFact++) {

        // Multiplier Begins
        for (i = 0; i <= mS.length - 1; i++) {
            mS[i] = element(mS[i]) * currentFact;
        }
        // Multiplier Ends

        // Checker Begins
        for (i = 0; i <= mS.length - 1; i++) {
            if (mS[i] > 9) {
                mS[i + 1] = element(mS[i + 1]) + Math.floor(element(mS[i]) / 10);
                mS[i] = element(mS[i]) % 10;
            }
        }
        // Checker Ends
    }

    if (array) { // Return result as array of digits
        return mS;
    } else { // Return result as string
        for (i = mS.length - 1; i >= 0; i--) {
            result = result + `${mS[i]}`;
        }
        return result;
    }
}

// Initializes empty array element as '0' on request, otherwise it would give 'undefined' value
function element(elem) {
    if (!elem) {
        elem = 0;
    }
    return elem;
}

module.exports = factorial;