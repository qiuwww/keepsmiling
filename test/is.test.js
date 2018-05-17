
describe('IS API:', function () {
	describe('#isEmpetyObject()', function () {
        it(`keepsmiling.isEmptyObject({}) should return true`, function () {
            assert(keepsmiling.deepClone({}));
        });

        it(`keepsmiling.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(keepsmiling.isEmptyObject({
                one: 1
            }));
        });

        it(`keepsmiling.isEmptyObject([]) should return false`, function () {
            assert.notEqual(keepsmiling.isEmptyObject([]));
        });
    });
});

