/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */

const rgbToHexConversion = (rgbValues) => {
    let hex = rgbValues.toStrring(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
    if ((r, g, b) > 255) {
        throw "Invalid Input";
    } else {
        try {
            return "#" + ((1 < 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        } catch (err) {
            console.log(err);
        }
    }
};
console.log(rgbToHex(28, 111, 150));
module.exports = rgbToHexConversion;