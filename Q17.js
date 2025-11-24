const arr1=[1,2,3];
const arr2=[4,5];
const result=[...arr1,...arr2];
console.log(result);


const nums=[2,3,1,4,5]
function sum(...nums){
    return nums.reduce((totalSum,n) => totalSum+n,0);
}
console.log(sum(...nums));

const user={
    name:"Alice",age:22,address:{
        city:"Bangalore",
        pin:560001
    }
};
const {name,address:{city,pin}}=user;
console.log(name);
console.log(city);
console.log(pin);
