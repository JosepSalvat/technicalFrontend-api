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
  user.imageUrl = `https://loremflickr.com/320/240?random=${faker.random.number(
    { min: 1, max: 100 },
  )}`;
  user.gender = faker.random.arrayElement([
    EmployeeGender.MALE,
    EmployeeGender.FEMALE,
    EmployeeGender.OTHER,
  ]);
  return user;
});
