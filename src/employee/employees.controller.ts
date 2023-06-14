import { Controller, Get } from '@nestjs/common';
import { employees } from 'src/data';

@Controller('employees')
export class EmployeesController {
  @Get()
  getAllItems() {
    return employees;
  }
}
