// var value = 2;
// switch (value) {
//  case 1:
//  console.log('I will always run');
//  break;
//  case 2:
//  console.log('I will never run');
//  break;
// }

var animal = '';
switch (animal) {
 case 'Dog':
 console.log('I will not run since animal !== "Dog"');
 break;
 case 'Cat':
 console.log('I will not run since animal !== "Cat"');
 break;
 default:
 console.log('I will run since animal does not match any other case');
}

