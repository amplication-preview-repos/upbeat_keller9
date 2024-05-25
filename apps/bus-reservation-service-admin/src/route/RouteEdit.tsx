import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Distance" source="distance" />
        <TextInput label="EndLocation" source="endLocation" />
        <TextInput label="StartLocation" source="startLocation" />
      </SimpleForm>
    </Edit>
  );
};
