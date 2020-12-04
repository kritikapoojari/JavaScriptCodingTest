const rotateString = (str = "", step = 0) => {
    const length = str.length;
    step = step % length;
    step = step < 0 ? length + step : step;

    if (!str || length === 1 || !step) {
        return str;
    }

    const reRotateString = (str) => str.split("").reverse().join("");
    str = reRotateString(str);
    const statement1 = str.slice(0, step);
    const statement2 = str.slice(step);
    return reRotateString(statement1) + reRotateString(statement2);
};
console.log(rotateString("ContentStack", 1));
console.log(rotateString("SurfBoard", -1));
// module.exports = rotateString;