// Test runner: Karma
// Test library: Jasmine
// To run: 
//      % npm test

describe('my first test', () => {   // 'description', callback function
    let sut;                        // 'system under test'

    beforeEach(() => {              // resets the state & takes the callback func
        sut = {};                   // 'beforeEach' func initialise this 'sut' var to be {}
    })

    it('should be true if true', () => {  // a test using the 'it' func and takes 'descr', callback func
        // arrange - create property on object & initialise to one value
        sut.a = false;

        // act - change it to another value
        sut.a = true;

        // assert - that new state is what we expect - the 2nd value
        expect(sut.a).toBe(true);   // 'toBe' is a Jasmine matcher
    })
})