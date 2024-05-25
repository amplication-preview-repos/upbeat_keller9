import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type BusWhereInput = {
  busNumber?: StringNullableFilter;
  capacity?: IntNullableFilter;
  id?: StringFilter;
  model?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};
