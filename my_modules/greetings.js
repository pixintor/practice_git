function sayHello(name) {
  return `Hello ${name}!`;
}

function sayGoodbye(name) {
  return `Goodbye ${name}!`;
}

function appreciation(person){
  return `Thank you ${person} for accepting my invitaion to be a guess at my 50 year bathday`;
}

module.exports = {
  sayHello,
  sayGoodbye,
  appreciation,
};