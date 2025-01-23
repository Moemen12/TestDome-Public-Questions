export function findTwoSum(numbers: number[], sum: number): number[] | null {
  const seen = new Map();
  console.log(seen);

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const needed = sum - current;

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }
    seen.set(current, i);
  }

  return null;
}
