// put the github link here:


// problem 1: kilometer to meter conversion

// problem 2: Make a budget calculator. The function will have 3 parameter(watch,phone,laptop) and have price of (watch = 50tk, phone = 100 tk, laptop = 500tk)....

// problem 3 : Count Hotel cost. 1 to 10 days = 100tk. 11 to 20 days = 80tk(20tk discount), 21 to many days 50tk. Only one input parameter(how many days you want to stay).

// problem 4: you have given an array as an input parameter of a function contain with friends name.You have to find out the largest name from this array.

// Given function name
// 1st: kilometerToMeter
// 2nd: budgetCalculator
// 3rd: hotelCost
// 4th: megaFriend

// solution: 1
function kilometerToMeter(kilometer){
    var meter = 0;
    if(kilometer <= 0){
        meter = "Please enter a positive value";
    }else{
        meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(1.2);
console.log(result);


// solution: 2
function budgetCalculator(watch,phone,laptop){
    var totalAmount = 0;
    if(watch < 0 || phone < 0 || laptop < 0){
        totalAmount = "Please enter a valid product quantity";
    }else{
        var watchAmount  = Math.round(watch) * 50;
        var phoneAmount  = Math.round(phone) * 100;
        var laptopAmount = Math.round(laptop) * 500;
        totalAmount = watchAmount + phoneAmount + laptopAmount;
    }
    return totalAmount;
}

var myBudget = budgetCalculator(1,3.2,-4);
console.log(myBudget); 


// solution: 3
function hotelCost(days){
    var cost = 0;
    if(days <= 0){
        cost = "Day's must not be zero or negative.Enter a positive value";
    }else if(days <= 10){
        var cost = Math.round(days) * 100;
    }else if(days <= 20){
        var firstPart = 10 * 100;
        var remainingDays = Math.round(days) - 10;
        var secondPart = remainingDays * 80;
        cost = firstPart + secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDays = Math.round(days) - 20;
        var thirdPart = remainingDays * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result = hotelCost(5);
console.log(result);





// solution: 4
function megaFriend(friendsName){
    var stringCount = " ";
    if(friendsName.length <= 0){
        stringCount = "Enter a valid name array";
    }else{
        for(var i = 0; i< friendsName.length; i++){
            if(stringCount.length < friendsName[i].length){
                stringCount = friendsName[i];
            }
        }
    }
    return stringCount;
}
var friendsName = ["Salman","ammir","Jhankar"];
var result = megaFriend(friendsName);
console.log(result);




