import Set from './set'


describe('set', () => {
    it('should return 0 for empty set', () => {
        const set = new Set();
        expect(set.size()).toBe(0)
    })
    it('should return size of passed list', () => {
        const set = new Set([1, 2, 3, 4]);
        expect(set.size()).toBe(4)
    })
    it('should return the list of your set', () => {
        const set = new Set([1, 2, 3, 4]);
        expect(set.values()).toEqual([1, 2, 3, 4])
    })
    it('should return boolean if value is added', () => {
        const set = new Set([1, 2, 3, 4]);
        expect(set.add(5)).toEqual(true)
    })
})