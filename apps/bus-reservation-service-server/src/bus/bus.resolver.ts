import * as graphql from "@nestjs/graphql";
import { BusResolverBase } from "./base/bus.resolver.base";
import { Bus } from "./base/Bus";
import { BusService } from "./bus.service";

@graphql.Resolver(() => Bus)
export class BusResolver extends BusResolverBase {
  constructor(protected readonly service: BusService) {
    super(service);
  }
}
