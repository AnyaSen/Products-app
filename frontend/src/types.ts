export interface productType {
  name: string;
  price: { price: number; unit: string };
  pricePerKg: number;
  description: string;
  img: Buffer;
}
