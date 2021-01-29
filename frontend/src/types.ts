export interface productType {
  name: string;
  _id: string;
  price: { priceEuros: number; priceCents?: number; unit: string };
  pricePerKg: number;
  description: string;
  img: Buffer;
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
}
