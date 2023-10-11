const fizz = 'Fizz';
const fizzNum = 3;
const buzz = 'Buzz';
const buzzNum = 5; 
const fizzBuzz = 'FizzBuzz';
const fizzBuzzNum = 15;
for(counter=1; counter<=100; counter++){
    if (counter % fizzBuzzNum === 0){
        console.log(fizzBuzz);
    } else if (counter % buzzNum === 0){
        console.log(buzz);
    } else if (counter % fizzNum === 0){
        console.log(fizz);
    } else {
        console.log(counter);
    }

}
