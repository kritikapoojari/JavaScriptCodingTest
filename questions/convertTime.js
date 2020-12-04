/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if (convertTime === "") {
        throw new Error("Invalid Input");
    } else if (convertTime === String) {
        throw new Error("Enter valid number");
    } else {
        var hours = Math.floor(seconds / 60 / 60);
        var minutes = Math.floor(seconds / 60);
        var sec = seconds % 60;
        return hours + ":" + minutes + ":" + sec;
    }
};

console.log("The time is :", convertTime(5000));

module.exports = convertTime;