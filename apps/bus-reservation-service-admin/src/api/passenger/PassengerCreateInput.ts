import { ReservationCreateNestedManyWithoutPassengersInput } from "./ReservationCreateNestedManyWithoutPassengersInput";

export type PassengerCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutPassengersInput;
};
