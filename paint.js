const Paint = function(){
    this.litres = 5;
}

Paint.prototype.emptyPaint = function(){
    this.litres = 0;
}

module.exports = Paint;
