import NodeCache from "node-cache";
import casual from "casual";

import {Cache} from "../../src/cache";
import Mock = jest.Mock;

jest.mock("node-cache");

describe("Cache", () => {
  const DEFAULT_CACHE_TIME = 10;
  let getMock: Mock;
  let setMock: Mock;

  beforeEach(() => {
    getMock = jest.fn();
    setMock = jest.fn();
    // @ts-ignore
    NodeCache.mockImplementation(() => {
      return {
        cacheTime: DEFAULT_CACHE_TIME,
        get: getMock,
        set: setMock,
      };
    });
  });

  it("get", () => {
    const cache = new Cache<number>({cacheTime: DEFAULT_CACHE_TIME});
    const key = casual.uuid;
    const value = casual.uuid;

    getMock.mockReturnValue(value);
    const cached = cache.get(key);

    expect(getMock).toHaveBeenCalledWith(key);
    expect(cached).toBe(value);
  });

  it("set", () => {
    const cache = new Cache<number>({cacheTime: DEFAULT_CACHE_TIME});
    const key = casual.uuid;
    const value = casual.integer(0, Number.MAX_SAFE_INTEGER);
    const expectedResult = casual.boolean;

    setMock.mockReturnValue(expectedResult);
    const result = cache.set(key, value);

    expect(setMock).toHaveBeenCalledWith(key, value, DEFAULT_CACHE_TIME);
    expect(result).toBe(expectedResult);
  });
});
