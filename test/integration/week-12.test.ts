import { twelfthWeekAssignmentFirst, twelfthWeekAssignmentSecond } from "../../src/weeks";

describe("Week 12", () => {
  describe("Assignment 1", () => {
    it("test data", async () => {
      const result = await twelfthWeekAssignmentFirst.do([
        [50, 13],
        [60, 10],
        [100, 20],
        [120, 30],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
      ]);

      expect(result).toEqual(300);
    });
    it("Problem set data", async () => {
      const result = await twelfthWeekAssignmentFirst.do();

      expect(result).toEqual(2493893);
    });
  });

  describe("Assignment 2", () => {
    it("test data", async () => {
      const result = await twelfthWeekAssignmentSecond.do([
        [50, 13],
        [60, 10],
        [100, 20],
        [120, 30],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
        [30, 5],
      ]);

      expect(result).toEqual(300);
    });
    it("Problem set data", async () => {
      const result = await twelfthWeekAssignmentSecond.do();

      expect(result).toEqual(4243395);
    });
  });
});
