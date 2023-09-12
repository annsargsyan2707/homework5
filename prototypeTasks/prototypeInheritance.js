const a = [1, 2, 3];
a ---> Array.prototype ---> Object.prototype ---> null


const str = "";
str ---> String.prototype ---> Object.protorype ---> null


const human = {
  isHuman: true,
};
human ---> Object.prototype ---> null

  
const user = {
  name: "John",
  __proto__: human
  
}

user ---> human ---> Object.prototype ---> null;



const emptyWithoutProto = Object.create(null);
emptyWithoutProto ---> null
Object.getPrototypeOf(emptyWithoutProto) === null;


const bmw = Object.create(null);
bmw ---> null
Object.getPrototypeOf(bmw) === null


const car = {
  hasEngine: true,
}
car ---> Object.prototype ---> null


const mercedes = {
  name: "mersedes",
  __proto__: car,
}
mercedes ---> car ---> Object.prototype ---> null


function fn(){
  console.log("hello, world!")
}
fn ---> Function.prototype ---> Object.prototype ---> null


const emptyObj = {};
emptyObj ---> Object.prototype ---> null


const num = 12;
num ---> Number.prototype ---> Object.prototype ---> null

const isAuth = false;
isAuth ---> Boolean.pototype ---> Object.prototype ---> null 