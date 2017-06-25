//task 1;
function isBigger (x,y){
    var c;
    c=x>y;
    console.log('Result first number isBigger: ', c);
    return c;
};
// isBigger (9,5);

 //task 2;
function isSmaller (x,y){
    var z = isBigger(x,y);
    z = !(z);
    console.log('Result: first number isSmaller: ', z);
    return z;
};
isSmaller (-1,4);


//task 3;
var argum = [];
function getMin (){
    for (var i = 0; i < arguments.length; i++) {
        argum[i] = arguments[i];
    }
    for (var i = 0; i < argum.length; i++) {
        if(argum[i] < argum[0]){
            argum[0] = argum[i];
        }
    };
    console.log('min result: ', argum[0]);
};
getMin (15,2,22,5,86,-3,111);

//task 4-a;
function pow (a,b){
    var c = Math.pow(a, b);
    console.log(c);
    return c;
}
pow(2,6);

//task 4-b;
function pow (a,b){
    var c=a;
    for (var i = 1; i < b; i++) {
        c *= a;
    }
    console.log(c);
    return c;
}
pow (2,5);

//task 5;
var inputValues = [11,-2,-445,4,3,-7];

function getClosestToZero (argum){
    if(argum.length == 0){
        console.log('Error: empty array');
        return;
    }
    argum.forEach(function(item, i, argum)
    {
        argum.sort (function(a,b){
            return a - b;});
        var minNegative = null,
            minPositive = null;
        for (var i = 0; i < argum.length; i++) {
            if (argum[i] <= 0) {
                minNegative = argum[i];
            }
            else {
                minPositive = argum[i];
                break;
            }
        }
        minNegative = minNegative == null ? minPositive : minNegative;
        minPositive = minPositive == null ? minNegative: minPositive;
        var result = closestToZero(minNegative,minPositive);
        console.log('Ближайшее к 0:', result);
    });

    function closestToZero (val1,val2){
        if(Math.abs(val1)<Math.abs(val2)){
            return val1;
        }
        else{
            return val2;
        }
    };
}
getClosestToZero(inputValues);


//task 6;
//4 домашнюю работу перезалила, но там практически нет изменений (удалила закоментированные куски кода) -
  //  она и так написана в основном. на функциях. (вижу только одно место. которое можно еще вынести отдельно).