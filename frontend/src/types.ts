export interface productType {
  name: string;
  _id: string;
  price: { priceEuros: number; priceCents?: number; unit: string };
  pricePerKg: number;
  description: string;
  img: Buffer;
}
