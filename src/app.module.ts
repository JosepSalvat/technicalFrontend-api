import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule } from './config/config';
import { Employee } from './db/employees.entity';
import { EmployeesController } from './employees/employee.controller';
import { EmployeesService } from './employees/employee.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Employee],
      synchronize: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: async () => ({
    //     seeds: ['src/modules/university/infra/seeds/*.ts'],
    //     factories: ['src/modules/university/infra/factories/*.ts'],
    //   }),
    // } as TypeOrmModuleAsyncOptions),
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class AppModule {}
