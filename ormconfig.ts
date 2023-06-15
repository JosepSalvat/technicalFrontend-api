import { Employee } from 'src/db/employees.entity';

export default {
  type: 'postgres',
  host: 'technical-interview-fe.cfyuoma0cbgb.us-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: 'aMBs4pE4IQ4aBjWWYF97',
  database: 'postgres',
  entities: [Employee],
  seeds: ['src/db/seeding/seeds/**/*{.ts,.js}'],
  factories: ['src/db/seeding/factories/**/*{.ts,.js}'],
  logging: ['error'],
};
