import { BusWhereUniqueInput } from "../bus/BusWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PassengerWhereUniqueInput } from "../passenger/PassengerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReservationWhereInput = {
  bus?: BusWhereUniqueInput;
  id?: StringFilter;
  passenger?: PassengerWhereUniqueInput;
  reservationDate?: DateTimeNullableFilter;
  seatNumber?: IntNullableFilter;
};
