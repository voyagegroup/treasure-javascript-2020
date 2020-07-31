const object1 = { property: 'value' };
console.log('object1.property: ' + object1.property);

const object2 = object1
object2.property = 'value2'

console.log('object2.property: ' + object2.property);
console.log('object1.property: ' + object1.property);