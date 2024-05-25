import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "endLocation";

export const RouteTitle = (record: TRoute): string => {
  return record.endLocation?.toString() || String(record.id);
};
