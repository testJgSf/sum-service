const { main } = require('../../../src/business/sumController');
let log4js = require("log4js");
global.log = log4js.getLogger();
log.level = 'debug';
let roundTo = require('round-to');
global.roundNumber = roundTo;
global.decimalsNumber = 2;
global.httpOk = 200;
global.httpUnprocessableEntity= 422;


describe('It should return a expected result',  () => {
    it('Result should be Ok', () => {
        expect(main([10,2]).body.result).toBe(12);
        expect(main([10,-1]).body.result).toBe(9);
    })
});
