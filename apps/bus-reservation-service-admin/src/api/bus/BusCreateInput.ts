import { ReservationCreateNestedManyWithoutBusesInput } from "./ReservationCreateNestedManyWithoutBusesInput";

export type BusCreateInput = {
  busNumber?: string | null;
  capacity?: number | null;
  model?: string | null;
  reservations?: ReservationCreateNestedManyWithoutBusesInput;
};
