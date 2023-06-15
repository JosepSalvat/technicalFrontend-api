import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/db/employees.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private candidateRepository: Repository<Employee>,
  ) {}
  async getAllCandidates() {
    const employees = await this.candidateRepository.find();
    return {
      employees,
    };
  }
}
