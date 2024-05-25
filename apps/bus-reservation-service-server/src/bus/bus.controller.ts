import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusService } from "./bus.service";
import { BusControllerBase } from "./base/bus.controller.base";

@swagger.ApiTags("buses")
@common.Controller("buses")
export class BusController extends BusControllerBase {
  constructor(protected readonly service: BusService) {
    super(service);
  }
}
