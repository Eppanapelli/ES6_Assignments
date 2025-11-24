//1  Template literals+Expressions
console.log(`${5}+${7}=${5+7}`);

const str=`My name is Alekhya.
I have graduated in 2024 from 
Rajiv Gandhi University of Knowledge Technologies, Basar`;
console.log(str);

const firstName="John";
const lastName="Doe";
console.log(`${firstName} ${lastName}`);

//2. Arrow Functions & this

const square=(n)=>n*n;
console.log(square(5));

// const obj={
//     value:50,test:()=>console.log(this.value)
// };
// obj.test();
// It gives undefined Becuase Arrow functions don't have their own this
// this refers to the global scope not to the object

const obj = {
  value: 50,test() {
    console.log(this.value);
  }
};
obj.test(); 
