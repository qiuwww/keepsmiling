
describe('Random API: ', function() {
	describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(keepsmiling.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(keepsmiling.randomColor()))
        });
    });
});