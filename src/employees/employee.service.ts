import { Injectable } from '@nestjs/common';
import { PageOptionsDto } from '../page/dtos';
import { Employee } from '../db/employees.entity';
import { PageMetaDto } from '../page/meta.dto';
import { PageDto } from '../page/page.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  public async getAllCandidates(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Employee>> {
    const { order, skip, take } = pageOptionsDto;

    const [entities, itemCount] = await this.employeeRepository.findAndCount({
      order: { id: order },
      skip,
      take,
    });

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
