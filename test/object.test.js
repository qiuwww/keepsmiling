describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual keepsmiling.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, keepsmiling.deepClone(person))
        });

        it(`person deepEqual keepsmiling.deepClone('string') should return true`, function () {
            let person = 'string'
            assert.deepEqual(person, keepsmiling.deepClone(person))
        });

        it(`person deepEqual keepsmiling.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, keepsmiling.deepClone(date))
        });

        it(`person deepEqual keepsmiling.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, keepsmiling.deepClone(person))
        });

        it(`person === keepsmiling.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, keepsmiling.deepClone(person))
        });
    });
});