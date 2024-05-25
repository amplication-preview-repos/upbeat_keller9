import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BUS_TITLE_FIELD } from "../bus/BusTitle";
import { PASSENGER_TITLE_FIELD } from "../passenger/PassengerTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
