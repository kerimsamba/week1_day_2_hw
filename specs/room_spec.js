const assert = require('assert');
const Room =  require('../room.js');

describe('Room', function(){

let room;

    this.beforeEach(function(){
        room = new Room(10);
    })

    it('should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 10);
    })

    it('should not be painted', function(){
        const actual = room.painted;
        assert.strictEqual(false, actual);
    })

    it('should be able to be painted', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(true, actual);
    })

})