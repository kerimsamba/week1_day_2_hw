const Decorator = function(){
    this.paintStock = 0;
    this.paintLitres = 0;
}

Decorator.prototype.addACan = function(litres){
    this.paintStock += 1;
    this.paintLitres += litres;
}

Decorator.prototype.enoughPaint = function(area){
    let success = false
    if (this.paintLitres >= area) success = true;
    return success;
}

module.exports = Decorator;