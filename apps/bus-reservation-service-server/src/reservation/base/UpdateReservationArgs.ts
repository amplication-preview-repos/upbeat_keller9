/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReservationUpdateInput } from "./ReservationUpdateInput";

@ArgsType()
class UpdateReservationArgs {
  @ApiProperty({
    required: true,
    type: () => ReservationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReservationWhereUniqueInput)
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  where!: ReservationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReservationUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReservationUpdateInput)
  @Field(() => ReservationUpdateInput, { nullable: false })
  data!: ReservationUpdateInput;
}

export { UpdateReservationArgs as UpdateReservationArgs };
