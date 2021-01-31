export interface productType {
  name: string;
  _id?: string;
  price: { priceEuros: number; priceCents?: number };
  pricePerKg?: number;
  description: string;
  img?: Buffer;
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
}
