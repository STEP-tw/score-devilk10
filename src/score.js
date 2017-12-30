const Score=function (accumlator) {
  this.score=0;
  this.accumlator=accumlator;
};

Score.prototype.update=function () {
  return this.score+=this.accumlator;
};
