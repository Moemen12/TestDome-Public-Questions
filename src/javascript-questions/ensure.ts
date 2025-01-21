export function ensure(value: unknown) {
  if (value === undefined) throw new Error("Value hasn't been passed");
  return value;
}
