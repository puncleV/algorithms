import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { KnapsackItem } from "./knapsack-item";

const knapsack = (items: KnapsackItem[], n: number, w: number): number => {
  const solved = new Map();

  const solve = (items: KnapsackItem[], n: number, w: number): number => {
    const key = `${n}:${w}`;

    if (solved.has(key)) {
      return solved.get(key);
    }

    if (n === 0 || w === 0) {
      return 0;
    }

    if (w - items[n - 1].weight < 0) {
      const result = solve(items, n - 1, w);

      solved.set(key, result);

      return result;
    }

    const result = Math.max(solve(items, n - 1, w - items[n - 1].weight) + items[n - 1].value, solve(items, n - 1, w));

    solved.set(key, result);

    return result;
  };

  return solve(items, n, w);
};

const assignmentFn = (input: Array<number[]>) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-12-big.txt"));

  const [knapsackSizes, ...elements] =
    input ||
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map((v) => v.split(" ").map((v) => parseInt(v, 10)));

  const itemsToStore = elements.map((v) => new KnapsackItem(v[0], v[1]));

  return knapsack(itemsToStore, knapsackSizes[1], knapsackSizes[0]);
};

export const twelfthWeekAssignmentSecond = new Assignment("KNAPSACK", assignmentFn);
