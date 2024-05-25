import { ReservationUpdateManyWithoutPassengersInput } from "./ReservationUpdateManyWithoutPassengersInput";

export type PassengerUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationUpdateManyWithoutPassengersInput;
};
