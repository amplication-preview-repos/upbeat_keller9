import { Reservation } from "../reservation/Reservation";

export type Bus = {
  busNumber: string | null;
  capacity: number | null;
  createdAt: Date;
  id: string;
  model: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
