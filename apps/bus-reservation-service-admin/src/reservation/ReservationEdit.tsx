import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BusTitle } from "../bus/BusTitle";
import { PassengerTitle } from "../passenger/PassengerTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bus.id" reference="Bus" label="Bus">
          <SelectInput optionText={BusTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="passenger.id"
          reference="Passenger"
          label="Passenger"
        >
          <SelectInput optionText={PassengerTitle} />
        </ReferenceInput>
        <DateTimeInput label="ReservationDate" source="reservationDate" />
        <NumberInput step={1} label="SeatNumber" source="seatNumber" />
      </SimpleForm>
    </Edit>
  );
};
