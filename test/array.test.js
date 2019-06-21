// describe, 下边整个就是一个回调函数
describe('array Module:', function () {
  // 前置条件，附加条件
  beforeEach(function () {
    this.ary = [1, 2, 3];
  });
  describe('#arrayAverage()', function () {
    it('should return average 2', function () {
      let two = 2;
      assert(keepsmiling.arrayAverage(this.ary) === two);
    });
  });
});
