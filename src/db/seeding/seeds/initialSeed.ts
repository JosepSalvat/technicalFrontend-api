import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Employee } from 'src/db/employees.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Employee)().createMany(1000);
  }
}
