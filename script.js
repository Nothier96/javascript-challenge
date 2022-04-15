const choice = prompt("Choose between Deposit Money and Withdraw Money");

let balance = 200 ; 

if (choice === "Deposit") {
    const amount1 = Number(prompt("How much would you like to deposit"));
    balance = balance + amount1 ;
    alert(`your new balance is ${balance}`)
    alert(`You got moneeeyyyyyy!!!!`) ;
 } 
 else  if (choice === "Withdraw") {
    const amount2 = Number(prompt("How much would you like to withdraw"));
    if (amount2 < balance) {
        balance = balance - amount2 ; 
        alert(`your new balance is ${balance}`)
        alert(`You still got moneeeyyyyyy!!!!`) ;
    } else {
        alert(`low funds!`); 
        alert(`you can't withdraw what you don't have. Not Today!`);
    }
 }
