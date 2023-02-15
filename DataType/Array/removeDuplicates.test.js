import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './removeDuplicates';

describe("删除有序数组中的重复项", () => {
  it("[1,1,2]", () => {
    expect(removeDuplicates([1,2,3])).toBe(2)
  })

  it("[0,0,1,1,1,2,2,3,3,4]", () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
  })
})