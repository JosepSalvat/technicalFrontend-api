import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';

export enum EmployeeGender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class EmployeeDto {
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(EmployeeGender)
  gender: EmployeeGender;

  @IsNumber()
  salary: number;

  @IsString()
  quote: string;
}

export class EmployeeListDto {
  employees: EmployeeDto[];
  count: number;
}

export class EmployeeOptionsDto {
  genders: EmployeeGender[];
}
