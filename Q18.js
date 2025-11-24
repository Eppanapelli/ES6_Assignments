/*a) What is the output?
if(true){
    let x=10;
    var y=20;
}
console.log(y);
console.log(x);

20
ReferenceError: x is not defined
because var has function scope not block scope if we declare in block also we can get the value.
let is block scope if we declare let in block it is not available outside of the block*/

const profile = {
  user:{
    details:{
      email:"test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email);
console.log(profile.user?.details?.phone);



const student = {
  name: "Alekhya"
};
console.log(student.address?.city);

const student1 = {
  name: "Alekhya"
};
console.log(student1.address.city);//Error: Cannot read properties of undefined