import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusServiceBase } from "./base/bus.service.base";

@Injectable()
export class BusService extends BusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
