import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUS_TITLE_FIELD } from "../bus/BusTitle";
import { PASSENGER_TITLE_FIELD } from "./PassengerTitle";

export const PassengerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="passengerId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Bus" source="bus.id" reference="Bus">
              <TextField source={BUS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Passenger"
              source="passenger.id"
              reference="Passenger"
            >
              <TextField source={PASSENGER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReservationDate" source="reservationDate" />
            <TextField label="SeatNumber" source="seatNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
