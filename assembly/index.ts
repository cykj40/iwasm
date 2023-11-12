declare function log(n: i32): void;

export function SubtractOne(n: i32): i32 {
  log(n);
  return n - 1;
}


export function fizzbuzz(n: i32): string | null {
  if (n % 15 == 0) {
    return "fizzbuzz";
  } else if (n % 3 == 0) {
    return "fizz";
  } else if (n % 5 == 0) {
    return "buzz";
  } else {
    return n.toString();
  }
}