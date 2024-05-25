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
import { PassengerWhereInput } from "./PassengerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PassengerOrderByInput } from "./PassengerOrderByInput";

@ArgsType()
class PassengerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PassengerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PassengerWhereInput, { nullable: true })
  @Type(() => PassengerWhereInput)
  where?: PassengerWhereInput;

  @ApiProperty({
    required: false,
    type: [PassengerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PassengerOrderByInput], { nullable: true })
  @Type(() => PassengerOrderByInput)
  orderBy?: Array<PassengerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PassengerFindManyArgs as PassengerFindManyArgs };