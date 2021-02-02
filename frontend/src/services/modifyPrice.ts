export const modifyPriceCents = (price: number) => {
  if (price.toString().length === 1) {
    return `0${price}`;
  }
  return price;
};
