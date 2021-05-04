export {countsAsYes};

function countsAsYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();
    return firstLetter === 'y';
} 


