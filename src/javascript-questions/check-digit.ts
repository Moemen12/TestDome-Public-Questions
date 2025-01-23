export function createCheckDigit(membershipId: string): number {
  let sum: string = membershipId;

  while (sum.length > 1) {
    sum = sum
      .split("")
      .reduce((acc: number, digit: string) => acc + parseInt(digit), 0)
      .toString();
  }

  return parseInt(sum);
}
