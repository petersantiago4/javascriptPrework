function hello() {
    console.log("Hello World!");
}

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x){
    console.log("The number you entered was: ", x);
    }

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}

subtractTwoNumbers(5, 7);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;
}

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

//The return is the value that the function spits out
//We create a function with parameters a, x, y, z.
//We called the function and pass in argument values to fulfill the parameter.
//Inside the function, we do some math and distill the value down in our total variable.
//We return the total outside of the function.

function myWifesAgeAndMyAge(b, d){
    let myAge = b;
    let wifesAge = d;
    let total = myAge + wifesAge;
    console.log(total);
    return total;
}
    
myWifesAgeAndMyAge(40, 39);

function myName(a, b){
    let firstName = a;
    let lastName = b;
    let total = firstName + lastName;
    console.log(total);
    return total;
}
myName("Peter ", "Santiago");

function petType(c, d){
    let petName = c;
    let petBreed = d;
    let total = petName + petBreed;
    console.log(total);
    return total;
}

petType("snoopy ", "beagle");

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

function calculatorPriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatorPriceIndiana(17, 5);





