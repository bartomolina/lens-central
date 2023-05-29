export const truncate = (string_: string, n: number) => {
  return string_ && string_.length > n
    ? string_.slice(0, n - 1) + "…"
    : string_;
};
