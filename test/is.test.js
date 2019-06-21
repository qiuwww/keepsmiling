
describe('is Module:', function () {
  describe('#isEmptyObject()', function () {
    it(`keepsmiling.isEmptyObject({}) should return true`, function () {
      assert(keepsmiling.isEmptyObject({}), 'THIS IS AN ASSERTION MESSAGE');
    });
    it(`keepsmiling.isEmptyObject(null) should return false`, function () {
      assert.ok(keepsmiling.isEmptyObject(null) === false);
    });
    it(`keepsmiling.isEmptyObject({ one: 1 }) should return false`, function () {
      assert.equal(keepsmiling.isEmptyObject({
        one: 1
      }), false);
    });
    it(`keepsmiling.isEmptyObject([]) should return false`, function () {
      assert.notEqual(keepsmiling.isEmptyObject([]), true);
    });
  });
  describe('#isEmail()', function () {
    it(`keepsmiling.isEmail('1014913222@qq.com') should return true`, function () {
      assert(keepsmiling.isEmail('1014913222@qq.com'));
    });
    it(`keepsmiling.isEmail('https://www.baidu.com') should return false`, function () {
      assert(keepsmiling.isEmail('https://www.baidu.com') === false);
    });
  });
  describe('#isIdCard()', function () {
    it(`keepsmiling.isIdCard('320523197309040018')['pass'] should return true`, function () {
      assert(keepsmiling.isIdCard('320523197309040018')['pass']);
    });
    it(`keepsmiling.isIdCard('3205231973090401X')['pass'] should return false`, function () {
      assert(keepsmiling.isIdCard('3205231973090401X')['pass'] === false);
    });
  });
});

