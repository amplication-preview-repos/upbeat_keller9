import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  busId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  passengerId?: SortOrder;
  reservationDate?: SortOrder;
  seatNumber?: SortOrder;
  updatedAt?: SortOrder;
};
