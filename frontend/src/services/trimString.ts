export const trimLongName = (name: string, chracterLimit: number) => {
  if (name.length > chracterLimit) {
    return name.slice(0, chracterLimit) + "...";
  }
  return name;
};
