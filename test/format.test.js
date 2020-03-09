describe('format Module:', function () {
  beforeEach(function () {
    this.n = 12323232;
    this.time = '2018/11/20';
  });
  describe('#digitUppercase(n)', () => {
    it('digitUppercase(n) should return a string', () => {
      assert(keepsmiling.digitUppercase(293453490854.45) === '贰仟玖佰叁拾肆亿伍仟叁佰肆拾玖万零捌佰伍拾肆元肆角伍分');
    });
  });
  describe('#formatPassTime(startTime)', () => {
    it('formatPassTime(startTime) should return a string', () => {
      const str = keepsmiling.formatPassTime('2018/11/12');
      console.log('2018/11/12: ', str);
      assert(typeof str === 'string');
    });
  });
  describe('#thousandsSeparator(num, fixNum)', () => {
    it('thousandsSeparator(123123123.4513212, 2) should return "123,123,123.45"', () => {
      assert(keepsmiling.thousandsSeparator(123123123.4513212, 2) === '123,123,123.45');
    });
  });
});
