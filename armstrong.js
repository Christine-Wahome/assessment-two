
const armstrong = (n) =>{
// create a temporary variable
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }
  // check the condition
 if (sum == n) {

    console.log(`${n} is an Armstrong number`);
 }
 else {
    console.log(`${n} is not an Armstrong number.`);
 }
}

armstrong('370')