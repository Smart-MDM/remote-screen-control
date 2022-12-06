import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput label="Discount" source="discount" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput step={1} label="Total Price" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
