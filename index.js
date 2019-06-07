// Code your solutions in this file
function writeCards(arr, ev) {
    let result = [];
    for ( let i = 0; i < arr.length; i++) {
        result.push( `Thank you, ${arr[i]}, for the wonderful ${ev} gift!`);
    };
    return result;
};

function countdown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }

};