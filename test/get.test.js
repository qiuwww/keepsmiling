
describe("get Module: ", () => {
  describe("#parseUrl()", () => {
    let urlObj = keepsmiling.parseUrl('http://baidu.com:80/abd?id=123&&title=123213#521');
    it("urlObj should return abject", function () {
      assert(typeof urlObj === 'object');
    });
    it("urlObj.port should return '80", function () {
      assert(urlObj.port === '80');
    });
  });
  describe("#getPrime()", () => {
    let primeArr = keepsmiling.getPrime(1, 1000);
    it("primeArr[8] should return 23", function () {
      assert.ok(primeArr[8] === 23);
    });
  });
});

