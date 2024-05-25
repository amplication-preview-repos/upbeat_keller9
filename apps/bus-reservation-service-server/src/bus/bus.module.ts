import { Module } from "@nestjs/common";
import { BusModuleBase } from "./base/bus.module.base";
import { BusService } from "./bus.service";
import { BusController } from "./bus.controller";
import { BusResolver } from "./bus.resolver";

@Module({
  imports: [BusModuleBase],
  controllers: [BusController],
  providers: [BusService, BusResolver],
  exports: [BusService],
})
export class BusModule {}
