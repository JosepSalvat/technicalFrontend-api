import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  FilterSuffix,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { EmployeeDto } from './dto/employee.dto';
import { Employee } from 'src/db/employees.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  public findAll(query: PaginateQuery): Promise<Paginated<Employee>> {
    return paginate(query, this.employeesRepository, {
      sortableColumns: ['id', 'name', 'email', 'gender', 'salary', 'quote'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['name'],
      select: ['id', 'name', 'email', 'gender', 'salary', 'quote'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
        age: true,
      },
    });
  }
}
