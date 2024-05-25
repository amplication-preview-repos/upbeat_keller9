import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BusTitle } from "../bus/BusTitle";
import { PassengerTitle } from "../passenger/PassengerTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
