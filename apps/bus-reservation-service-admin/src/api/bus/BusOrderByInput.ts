import { SortOrder } from "../../util/SortOrder";

export type BusOrderByInput = {
  busNumber?: SortOrder;
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
};
