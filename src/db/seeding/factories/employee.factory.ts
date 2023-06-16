import { Employee } from 'src/db/employees.entity';
import { EmployeeGender } from 'src/employees/dto/employee.dto';
import { define } from 'typeorm-seeding';

define(Employee, (faker) => {
  const user = new Employee();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  user.name = `${firstName} ${lastName}`;
  user.email = faker.internet.email(firstName, lastName);
  user.quote = faker.lorem.sentence(2000);
  user.salary = faker.random.number({ min: 25000, max: 150000 });
  user.imageUrl = faker.image.avatar();
  user.gender = faker.random.arrayElement([
    EmployeeGender.MALE,
    EmployeeGender.FEMALE,
    EmployeeGender.OTHER,
  ]);
  return user;
});
