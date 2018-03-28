const myPromiseHandler = require('./promiseRaceAll.js');

//Cases: 

test('return type', () => {
    expect(typeof myPromiseHandler([]).constructor.name).toEqual("Promise");
  });