const enhancer = require('./enhancer.js');
// test away!

describe("tests functionality of game system", () => {
    const item = { name: "Sword", durability: 8, enhancement: 20 };
  
    it("restores the durability to 100", () => {
      const final = { ...item, durability: 100 };
      expect(enhancer.repair(item)).toEqual(final);
    });
  
    it("successfully returns an enhanced object", () => {
      const works = { ...item, enhancement: 20 };
      expect(enhancer.success(item)).toEqual(works);
    });
  
    it("failure", () => {
      const failTest = { name: "Fail", durability: 15, enhancement: 17 };
      const works = { ...failTest, durability: 25, enhancement: 16 };
      expect(enhancer.fail(failTest)).toEqual(works);
    });
  });
