import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { parseInt } from "lodash";

const assignmentFn = (input: number[][]) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-12.txt"));

  const knapsackItems =
    input ||
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map((v) => v.split(' ').map(parseInt.bind(10)));


  return {
    knapsackItems
  };
};

export const twelvethWeekAssignmentFirst = new Assignment("KNAPSACK", assignmentFn);
