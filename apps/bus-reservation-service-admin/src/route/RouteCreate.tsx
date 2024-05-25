import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Distance" source="distance" />
        <TextInput label="EndLocation" source="endLocation" />
        <TextInput label="StartLocation" source="startLocation" />
      </SimpleForm>
    </Create>
  );
};
