import { Bus } from "../bus/Bus";
import { Passenger } from "../passenger/Passenger";

export type Reservation = {
  bus?: Bus | null;
  createdAt: Date;
  id: string;
  passenger?: Passenger | null;
  reservationDate: Date | null;
  seatNumber: number | null;
  updatedAt: Date;
};
