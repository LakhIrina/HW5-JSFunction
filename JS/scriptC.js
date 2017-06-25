var FIRST_GAME_PRIZE_FACTOR = 1;
var NEXT_GAME_PRIZE_FACTOR = 3;

function getNextNumber()
{
    return getRandomInt(0,5);
};

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function startGame(){

    var start = confirm("Чи бажаєте почати гру?");
    if (start === false) {
        console.log("Сьогодні ви не виграли мільйон, а могли");
        return;
    }

    console.log ("You start game!");
    var amount = 0;
    for(var gameNumber = 1;;gameNumber++) {
        var gameResult = game(gameNumber);
        switch(gameResult)
        {
            case 0: //loose game
                amount = 0;
                gameNumber = 1;
                break;
            case null:  //game canceled
                console.log('Ваш виграш ', 0, '$');
                console.log('Game ended');
                return;
        }

        amount = amount + gameResult;
        console.log('Ваш виграш ', amount, '$');

        var start = confirm("Чи бажаєте продовжити гру?");
        if (start === false) {
            console.log('Дякуємо за гру, ваш виграш становить:',amount, '$!');
            break;
        }

        //Start new game
        amount = amount * 2;

        console.log ("Ваш бонус становить ", amount, '$!' );
        console.log ("You start next game!");
    }
};

function game(gameNumber) //main function;
{
    var pcChoice = getNextNumber();
    console.log('PC number: ' + pcChoice);
    var сurrentPrize = 0;
    for(var tryNumber=1; tryNumber<4; tryNumber++){
        var choiceUser = prompt('Enter your number:', '');
        console.log('User\'s number: ' + choiceUser);
        if(choiceUser===null)
        {
            сurrentPrize = null;
            break;
        }
        if(choiceUser==pcChoice)
        {
            сurrentPrize = getCalculateCurrentPrize(gameNumber, tryNumber);
            break;
        }
    }  //for
    return сurrentPrize;
}; //game

function getCalculateCurrentPrize(gameNumber, tryNumber){
    var factor = getPrizeFactor(gameNumber);
    var prizeValue = getPrizeValueForTryNumber(tryNumber);
    var currentGameAmount = factor * prizeValue;
    return currentGameAmount;
};

function getPrizeValueForTryNumber(tryNumber){
    var prizeValues=[10,5,2];
    return prizeValues[tryNumber-1];
    console.log(prizeValues[tryNumber-1]);
};

function getPrizeFactor(gameNumber){
    if(gameNumber===1){
        return FIRST_GAME_PRIZE_FACTOR;
    }
    else{
        return NEXT_GAME_PRIZE_FACTOR;
    }
};

window.addEventListener('load', startGame(), false);