
describe("Random API: ", () => {
  describe("#randomColor()", () => {
    it("keepsmiling.randomColor() should return a string", () => {
      assert(/^#[0-9a-fA-F]{6}$/.test(keepsmiling.randomColor()))
    });
  });
  describe("#randomNum(min, max)", () => {
    it("keepsmiling.randomNum(min, max) should return a number between min and max", () => {
      let max = Math.pow(2, 53) - 1;
      let num = keepsmiling.randomNum(0, max);
      assert(num >= 0 && num <= max);
    });
  });
});
