// code your solution here
function saturdayFun(suggestion) {
    if (!suggestion) {
        suggestion = 'roller-skate';
    }
    return `This Saturday, I want to ${suggestion}!`
}
function mondayWork(suggestion) {
    if (!suggestion) {
        suggestion = 'go to the office';
    }
    return `This Monday, I will ${suggestion}.`
}

function wrapAdjective(highlight="*") {
    
    return function innerWrapAdjective(word="special") { 
        return `You are ${highlight}${word}${highlight}!`;
    };
}