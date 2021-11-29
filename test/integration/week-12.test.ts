import { twelvethWeekAssignmentFirst } from "../../src/weeks";

describe("Week 12", () => {
  describe("Assignment 1", () => {
    it("Problem set data", async () => {
      const result = await twelvethWeekAssignmentFirst.do([
        [50, 3],
        [60, 10],
        [100, 20],
        [120, 30],
      ]);

      expect(result).toEqual(220);
    });
  });
});
