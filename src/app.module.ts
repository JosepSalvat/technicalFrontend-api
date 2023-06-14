import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { EmployeesController } from './employee/employees.controller';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
