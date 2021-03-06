import _ from "lodash";
import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { DfsSccs } from "./dfs-sccs";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-5.txt"));

  const vertices = new Map(
    Object.entries(
      _.mapValues(
        _.groupBy(
          assignmentFile
            .toString()
            .split("\n")
            .filter((e) => e !== ""),
          (str) => Number(str.split(" ")[0]),
        ),
        (strArr) => strArr.map((str) => Number(str.split(" ")[1])),
      ),
    ).map(([key, value]) => [Number(key), value]),
  );

  const reversedVertices = new Map(
    Object.entries(
      _.mapValues(
        _.groupBy(
          assignmentFile
            .toString()
            .split("\n")
            .filter((e) => e !== ""),
          (str) => Number(str.split(" ")[1]),
        ),
        (strArr) => strArr.map((str) => Number(str.split(" ")[0])),
      ),
    ).map(([key, value]) => [Number(key), value]),
  );

  for (let i = 1; i <= 875715; i++) {
    if (!vertices.has(i)) {
      vertices.set(i, []);
    }

    if (!reversedVertices.has(i)) {
      reversedVertices.set(i, []);
    }
  }

  const dfsSccs = new DfsSccs(vertices, reversedVertices);
  return dfsSccs.calculateTopFiveOfSccs();
};

export const fifthWeekAssignment = new Assignment("SCCs of the graph", assignmentFn);
