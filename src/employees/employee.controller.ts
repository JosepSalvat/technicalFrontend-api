import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { EmployeeListDto } from './dto/employee.dto';
import { EmployeesService } from './employee.service';
import { PageOptionsDto } from 'src/page/dtos';

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
  async getCandidates(@Query() pageOptionsDto: PageOptionsDto) {
    return this.employeesService.getAllCandidates(pageOptionsDto);
  }
}
