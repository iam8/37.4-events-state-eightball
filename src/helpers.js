// Ioana A Mititean
// 37.4: React State - Eight Ball


/**
 * Create and return a color counter according to the given answers list, with all values
 * initialized to 0.
 *
 * Params:
 * - answers: list of {msg, color} for each answer
 *
 * Return:
 * - {"color1": 0, "color2": 0, "color3": 0, ...}
 */
function createColorCounter(answers) {
    const counter = {};

    for (let ans of answers) {
        counter[ans.color.toLowerCase()] = 0;
    }

    return counter;
}


export {createColorCounter};
