export interface IProduct {
  id?: number;
  name?: string;
  description?: string | null;
  price?: number | null;
  category?: string | null;
}

export const defaultValue: Readonly<IProduct> = {};
