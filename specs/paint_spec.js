const assert = require('assert');
const Paint = require('../paint.js')

describe('Paint', function(){
let paint;

    this.beforeEach(function(){
        paint = new Paint();
    })

    it('should have a number of litres of paint', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 5);
    })

    it('should be able to check if it is empty', function(){
        const actual = paint.litres;
        assert.notStrictEqual(actual, 0);
    })

    it('should be able to be emptied', function(){
        paint.emptyPaint();
        const actual = paint.litres;
        assert.strictEqual(actual, 0);
    })
})