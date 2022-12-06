import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
