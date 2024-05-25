import { BusWhereInput } from "./BusWhereInput";
import { BusOrderByInput } from "./BusOrderByInput";

export type BusFindManyArgs = {
  where?: BusWhereInput;
  orderBy?: Array<BusOrderByInput>;
  skip?: number;
  take?: number;
};
