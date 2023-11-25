"use strict";
function updateObjectInArray(initialArray, key, value, patch) {
    return [...initialArray].map((obj) => obj[key] === value ? Object.assign(Object.assign({}, obj), patch) : obj);
}
const arrName = [
    { id: '1', name: 'Max' },
    { id: '2', name: 'Ann' },
];
const newArrName = updateObjectInArray(arrName, 'id', '1', {
    name: 'Andre',
});
console.group('Task#2');
console.log('Before execution', arrName);
console.log('New array', newArrName);
console.log('Old array after execution', arrName);
console.groupEnd();
