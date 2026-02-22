export const shuffle = <T>(arr: T[]) =>
  [...arr].sort(() => Math.random() - 0.5);

export const randomItem = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];
