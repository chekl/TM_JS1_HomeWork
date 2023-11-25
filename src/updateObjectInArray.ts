function updateObjectInArray<ObjectShape>(
  initialArray: ObjectShape[],
  key: keyof ObjectShape,
  value: ObjectShape[typeof key],
  patch: Partial<ObjectShape>
): ObjectShape[] {
  return [...initialArray].map((obj) =>
    obj[key] === value ? { ...obj, ...patch } : obj
  );
}

interface PersonNameT {
  id: string;
  name: string;
}

const arrName = [
  { id: '1', name: 'Max' },
  { id: '2', name: 'Ann' },
];

const newArrName = updateObjectInArray<PersonNameT>(arrName, 'id', '1', {
  name: 'Andre',
});

console.group('Task#2');
console.log('Before execution', arrName);
console.log('New array', newArrName);
console.log('Old array after execution', arrName);
console.groupEnd();
