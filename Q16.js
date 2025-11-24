const isEven=(n)=>{
    if(n%2==0)
        return true;
    else
        return false;
}
console.log(isEven(4));

const marks=45;
const result= marks>=35 ? "Pass" : "Fail";
console.log(result);


const greet=(name)=> name? "Hello":"Guest";
console.log(greet("Alekhya"));
console.log(greet());
console.log(greet("Alekhya"));