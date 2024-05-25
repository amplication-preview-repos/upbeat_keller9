import { Bus as TBus } from "../api/bus/Bus";

export const BUS_TITLE_FIELD = "busNumber";

export const BusTitle = (record: TBus): string => {
  return record.busNumber?.toString() || String(record.id);
};
