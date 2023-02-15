/**
 * 1. 删除有序数组中的重复项
 * @param {number[]} numbers
 * @return {number}
 */
export const removeDuplicates = (numbers) => {
  const n = numbers.length;
  
  if (n === 0) {
    return 0;
  }
  let fast = 1, slow = 1;

  while (fast < n) {
    if (numbers[fast] !== numbers[fast - 1]) {
      numbers[slow] = numbers[fast];
      ++slow;
    }
    ++fast;
  }

  console.log("结果", slow)
  return slow;
};

// 运行测试
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
removeDuplicates([1,1,2]);

