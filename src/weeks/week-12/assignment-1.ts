import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { KnapsackItem } from "./knapsack-item";

const assignmentFn = (input: Array<number[]>) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-12.txt"));

  const [knapsackSizes, ...elements] =
    input ||
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map((v) => v.split(" ").map((v) => parseInt(v, 10)));

  const itemsToStore = elements.map((v) => new KnapsackItem(v[0], v[1]));

  const [size, itemsCount] = knapsackSizes;
  const a = new Array(itemsCount + 1).fill(null).map(() => new Array(size + 1));

  for (let i = 0; i <= itemsCount; i += 1) {
    for (let w = 0; w <= size; w += 1) {
      if (i === 0 || w === 0) {
        a[i][w] = 0;
        continue;
      }

      const previousValue = a[i - 1][w];
      const weightDifference = w - itemsToStore[i - 1].weight;

      if (weightDifference < 0) {
        a[i][w] = previousValue;
        continue;
      }

      a[i][w] = Math.max(previousValue, a[i - 1][weightDifference] + itemsToStore[i - 1].value);
    }
  }

  return a[itemsCount][size];
};

export const twelvethWeekAssignmentFirst = new Assignment("KNAPSACK", assignmentFn);
