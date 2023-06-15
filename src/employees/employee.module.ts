import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/db/employees.entity';
import { EmployeesController } from './employee.controller';
import { EmployeesService } from './employee.service';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeesService, Repository],
})
export class EmployeesModule {}
