  let option;
  let balance = 50000; // The user should have a deposit cap of $50,000.

do{
   option = prompt('Choose an option:\nQ to quit\nW to withdraw\nD to deposit\nB to view balance ')

   switch (option.toUpperCase()) {
     case 'W':
       withdrawAmount = prompt('Please Enter an Amount that you wish to withdraw');
       if (withdrawAmount > balance) {
         alert('You cannot withdraw more than you have');
       } else{
         if (balance - Number(withdrawAmount) < 200) {
          alert('Your balance would be too low: $' + (balance - withdrawAmount) );
        } else if(balance - Number(withdrawAmount) < 300) {
            let response =  prompt('your balance is getting low, Do you wish to continue? please enter Yes');
            if (response.toLowerCase() == 'yes') {
              balance = balance - Number(withdrawAmount);
            }
        } else {
          balance = balance - Number(withdrawAmount);
        }
      }
       break;
     case 'D':
       depositAmount = prompt('Please Enter an Amount that you wish to deposit');
       balance = balance + Number(depositAmount)
       break;
     case 'B':
       alert('Your Balance is: $' + balance);
       break;
   }
}while(option.toUpperCase() !== 'Q')
