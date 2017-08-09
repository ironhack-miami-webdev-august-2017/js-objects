var theUser = {
  name: 'Izzy Ironside',
  age: 28,
  hometown: 'Madrid',
  birthdate: new Date(1993, 9, 31),
  school: 'International School of Madrid',
  job: 'Systems Engineer Expert in Avionics',
  relationshipStatus: 'It\'s complicated'
};

var otherUser = {};
otherUser.name = 'Nizar';
otherUser.age = 31;
otherUser.hometown = 'San Juan';
otherUser.birthdate = new Date(1986, 7, 6);


console.log( theUser.job );
console.log( theUser.relationshipStatus );

console.log( theUser['job'] );
console.log( theUser['relationshipStatus'] );


var myDictionary = {
  // key: value,
  food: 'something you eat',
  water: 'something you drink',
  armpit: 'something you sniff',
  shit: 'poop',
  chair: 'something you sit on',
  'body odor': 'something that comes from you armpit'
    // 'body odor' is in quotes because
    // it's a key that has a space in it
};

console.log( myDictionary.chair );

console.log( myDictionary['chair'] );
console.log( myDictionary['body odor'] );

console.log( myDictionary.shit );
myDictionary.shit = 'what you say when you are frustrated';
console.log( myDictionary.shit );

console.log( myDictionary.bottle );
myDictionary.bottle = 'saves your computer from spills';
console.log( myDictionary.bottle );


console.log( myDictionary.armpit );
delete myDictionary.armpit;
console.log( myDictionary.armpit );

if (myDictionary.pizza === undefined) {
  console.log('No pizza');
}

if (!myDictionary.pizza) {
  console.log('Another way to check for no pizza');
}

if ('pizza' in myDictionary) {
  console.log('A way to check for pizza.');
}

console.log( 'bottle' in myDictionary );
console.log( 'blah' in myDictionary );
