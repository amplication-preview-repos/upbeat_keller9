/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReservationUpdateManyWithoutPassengersInput {
  @Field(() => [ReservationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReservationWhereUniqueInput],
  })
  connect?: Array<ReservationWhereUniqueInput>;

  @Field(() => [ReservationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReservationWhereUniqueInput],
  })
  disconnect?: Array<ReservationWhereUniqueInput>;

  @Field(() => [ReservationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReservationWhereUniqueInput],
  })
  set?: Array<ReservationWhereUniqueInput>;
}

export { ReservationUpdateManyWithoutPassengersInput as ReservationUpdateManyWithoutPassengersInput };
