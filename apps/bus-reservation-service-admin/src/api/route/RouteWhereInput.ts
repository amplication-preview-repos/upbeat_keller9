import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RouteWhereInput = {
  distance?: FloatNullableFilter;
  endLocation?: StringNullableFilter;
  id?: StringFilter;
  startLocation?: StringNullableFilter;
};
