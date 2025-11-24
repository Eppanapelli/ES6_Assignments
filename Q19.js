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

//3. Rest, Spread and copying objects
const product={name:"Pen", price:10};
const copy={...product};
console.log(copy);

const a={x:1};
const b={y:2};
const merge={...a,...b};
console.log(merge);

const nums=[1,2,3,4,5];
const maxValue=(...nums)=>{
    return Math.max(...nums);
}
console.log(maxValue(...nums));

//4.Destructuring and optional chaining

const arr = [10, 20, 30];
const [a1,b1,c1] = arr;
console.log(a1,b1);

const laptop={brand:"Dell",ram:"8GB"};
const {brand,ram}=laptop;
console.log(brand);

const info={};
console.log(info.user?.name);

//5.Scoping 
