import { EmployeeGender } from 'src/employees/dto/employee.dto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({
    type: 'enum',
    enum: EmployeeGender,
    default: EmployeeGender.OTHER,
  })
  gender: EmployeeGender;

  @Column({ type: 'float' })
  salary: number;

  @Column()
  quote: string;
}
