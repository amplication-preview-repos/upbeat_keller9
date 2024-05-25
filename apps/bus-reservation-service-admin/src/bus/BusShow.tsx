import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUS_TITLE_FIELD } from "./BusTitle";
import { PASSENGER_TITLE_FIELD } from "../passenger/PassengerTitle";

export const BusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BusNumber" source="busNumber" />
        <TextField label="Capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Model" source="model" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="busId"
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
