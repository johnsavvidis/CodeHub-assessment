function myFunction(myString) {
    /* [a,b,a], [1,2,2,1] */
    let i = 0;
    let noOfEquals = 0;
    let arr = Array.from(myString);
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === arr[arr.length - 1 - i]) {
          noOfEquals++;
       }
    }
    if (arr.length === noOfEquals) {
      console.log(myString + ' is a palindrome');
    }
  }
  
  myFunction('121');
  