function celciusToFarenheit(celcius) {
   return celcius*1,8 + 32;
}

let celciusValue = 28;
let farenheitValue = celciusToFarenheit(celciusValue);

console.log(farenheitValue);

function min(param1, param2){
    if(param1<=param2){
        return param1;
    }else{
        return param2;
    }
}

function min2(param1, param2){
    return param1<param2? param1:param2;
}

function homework1(name, age, city){
console.log(`Hi, My name is ${name}, I am ${age} years old and I live in ${city}`);
}
console.log(min2(1,2));
console.log(min2(100,99));
console.log(min2(-10,0));


// Function Expression
const myFunctionExpression = function (a,b){
    return a+b;
}
myFunctionExpression(1,3);

//OR The following way which is calles a Lambda Function
const myFunctionExpression2 = (a,b) => {
    return a+b;
}

// Also check out IFFE - Immediately Invoked Function Expression
console.log((function(a,b){return a+b})(1,15));