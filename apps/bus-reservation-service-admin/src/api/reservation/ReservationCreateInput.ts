import { BusWhereUniqueInput } from "../bus/BusWhereUniqueInput";
import { PassengerWhereUniqueInput } from "../passenger/PassengerWhereUniqueInput";

export type ReservationCreateInput = {
  bus?: BusWhereUniqueInput | null;
  passenger?: PassengerWhereUniqueInput | null;
  reservationDate?: Date | null;
  seatNumber?: number | null;
};
