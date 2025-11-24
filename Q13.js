//Multi-leve Array and Object Destructuring
const people=[{name:"Alice",address:
    {city:"New York",street:{name:"Broadway",number:123}}},
    {name:"Bob",
        address:{city:"Los Angeles",street:{name:"Sunset Boulevard",number:456}}}];
const [{name:peopleName1,address:{
    city:cityAddress1,street:{name:streetName1,number:streetNumber1}
}},{name:peopleName2,address:{
    city:cityAddress2,street:{name:streetName2,number:streetNumber2}
}}]=people;
        console.log(`["${peopleName1} lives in ${cityAddress1} on ${streetName1}" , "${peopleName2} lives in ${cityAddress2} on ${streetName2}"]`);