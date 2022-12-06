import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
