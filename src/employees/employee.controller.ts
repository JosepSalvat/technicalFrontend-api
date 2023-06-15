import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { EmployeeListDto } from './dto/employee.dto';
import { EmployeesService } from './employee.service';

@Controller('employees')
@ApiTags('Employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get employees',
    description:
      'This endpoint will return the whole list of available employees',
  })
  @ApiOkResponse({ status: 200, type: EmployeeListDto })
  async getCandidates() {
    return this.employeesService.getAllCandidates();
  }
}
