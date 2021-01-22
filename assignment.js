// https://github.com/shuvo616/Assignment-3



// solution: 1
function kilometerToMeter(kilometer){
    var meter = 0;
    if(kilometer <= 0){
        meter = "Distance can not be negative. Enter a positive number";
    }else{
        meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(2);
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

var myBudget = budgetCalculator(0,0,0);
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




