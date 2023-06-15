import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeesService } from './employee.service';

@Controller('employees')
@ApiTags('Employees')
export class EmployeesController {
  constructor(private readonly catsService: EmployeesService) {}

  @Get()
  public findAll(
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<EmployeeDto>> {
    return this.catsService.findAll(query);
  }
}
