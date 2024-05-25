import { ReservationUpdateManyWithoutBusesInput } from "./ReservationUpdateManyWithoutBusesInput";

export type BusUpdateInput = {
  busNumber?: string | null;
  capacity?: number | null;
  model?: string | null;
  reservations?: ReservationUpdateManyWithoutBusesInput;
};
