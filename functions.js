"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult2(add2(5, 12));
var combineValues;
combineValues = add2;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//# sourceMappingURL=functions.js.map