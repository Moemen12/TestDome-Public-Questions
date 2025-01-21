type Response = (arg: number) => number;
export function pipeline(...funcs: Array<(x: number) => number>): Response {
  return (arg: number): number => {
    let initialValue = 0;
    for (const func of funcs) {
      let value = func(initialValue === 0 ? arg : initialValue);
      initialValue = value;
    }

    return initialValue;
  };
}
