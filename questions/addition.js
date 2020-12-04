/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (number) => {
    try {
        if (addition !== " ") {
            let result = 0;
            for (let i = 1; i <= number; i++) {
                result = result + i;
            }
            return result;
        }
    } catch (err) {
        throw new err("Invalid Input");
    }

    // } else {}
};
console.log("Addition is:", addition(2));

//module.exports = addition;