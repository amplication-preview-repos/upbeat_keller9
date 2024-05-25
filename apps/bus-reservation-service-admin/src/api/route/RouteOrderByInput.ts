import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  distance?: SortOrder;
  endLocation?: SortOrder;
  id?: SortOrder;
  startLocation?: SortOrder;
  updatedAt?: SortOrder;
};
