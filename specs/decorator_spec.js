const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js')

describe('Decorator', function(){
let decorator;

    this.beforeEach(function (){
        decorator = new Decorator();
    })

    it('they should start with no paint', function(){
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 0);
    })

    it('they should be able to add a can of paint to their stock', function(){
        paint =  new Paint;
        decorator.addACan(paint.litres);
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 1);
    })
    it('they should be able to calculate total litres paint they have in stock', function(){
        paint =  new Paint;
        decorator.addACan(paint.litres);
        const actual = decorator.paintLitres;
        assert.strictEqual(actual, 5);
    })

    it('they able to calculate whether is has enough paint to paint a room', function(){
        paint = new Paint;
        room = new Room(10);
        decorator.addACan(paint.litres);
        decorator.addACan(paint.litres);
        const result = decorator.enoughPaint(room.area);
        assert.strictEqual(true, result);

    })
    it('they should be able to paint room if they have enough paint in stock', function(){
        paint = new Paint;
        room = new Room(5);
        decorator.addACan(paint.litres);
        room.painted = decorator.enoughPaint(room.area);
        assert.strictEqual(true, room.painted)

    })

})

