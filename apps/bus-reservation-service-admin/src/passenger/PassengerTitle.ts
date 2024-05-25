import { Passenger as TPassenger } from "../api/passenger/Passenger";

export const PASSENGER_TITLE_FIELD = "name";

export const PassengerTitle = (record: TPassenger): string => {
  return record.name?.toString() || String(record.id);
};
