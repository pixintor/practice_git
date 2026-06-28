// const path = require('path');
// const colors = require('colors');
// const greetings = require('./my_modules/greetings.js');

// console.log(colors.blue('current file:', path.basename(__filename)));

// console.log(colors.green('this tet is green'));


// async function greet(){
//   const speak = await import(./my_modules/greetings.js);
//   console(speak.greetings);
// }

// greet()


get

// /////////Assignment 2   solution


const user = {
  username: "tolu",
  age:23,
  getUsername() {
    return this.username;
  }
};

console.log(user.getUsername());


function createWallet(){
  let balance = 0;

  return{
    credit(amount){
      balance += amount;
    },

    debit(amount){
      if(amount > balance){
        return "insurficient Banlace";
      }
        balance -= amount;
    },

    getBalance(){
      return balance
    }
  };
}

const balance = createWallet();

balance.credit(1500);
balance.debit(160000);

console.log(balance.getBalance());


class Subcription{
   #active = false;

  constructor (plan, pricePerMonth){
    this.plan = plan;
    this.pricePerMonth = pricePerMonth;
  }
  

    activata(){
      this.#active = true;
    }
    
    cancle(){
      this.#active = false;
    }

    get monthlyCost(){
      return this.#active ? this.pricePerMonth : 0; this.pricePerMonth;
    }
}

const payment  = new Subcription('premium', 233);


payment.activata()
console.log(payment.monthlyCost);

payment.cancle()
console.log(payment.monthlyCost);




class Notification {
  send() { return "Sending generic notification"; }
}
class EmailNotification extends Notification {
  send() { return "Sending email"; }
}
class SMSNotification extends Notification {
  send() { return "Sending SMS"; }
}
const alerts = [new EmailNotification(), new SMSNotification()];
alerts.forEach(a => console.log(a.send()));


function summarize(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} → ${value}`);
  });
}

const cryptoStats = { BTC: 65000, ETH: 3500, SOL: 150 };
summarize(cryptoStats);


const path = require("path");


const filePath = process.argv[2];

const fileName = path.basename(filePath);

console.log(fileName);