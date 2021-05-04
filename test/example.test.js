// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {countsAsYes} from '../utils.js';
const test = QUnit.test;


//Returns true
test('should take any input that starts with y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Returns False
test('should take any input that starts with y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('nope');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
