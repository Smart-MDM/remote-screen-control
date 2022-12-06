import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
