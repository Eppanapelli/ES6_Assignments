const username="Alekhya";
const course="Web development";
console.log(`Hello ${username}, Welcome to the ${course} course`)

const name = "Sam";
const age = 21;
function student(){
const student = {
  name,
    age,
  greet() {
    console.log("Hello");
  }
}
return student;
};
const st = student();   
console.log(st.name); 
console.log(st.age);
st.greet(); 

const first="Alekhya";
const last="Eppanapelli"
const getFullName=()=>`${first} ${last}`;
console.log(getFullName());