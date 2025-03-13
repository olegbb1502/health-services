import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const dbName = process.env.DB_NAME || 'users';

export const typeOrmModuleOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  cache: false,
  database: dbName,
  logging: ['warn', 'error'],
  synchronize: true,
};

// used from console
// const appDataSource = new DataSource({
//   ...typeOrmModuleOptions,
//   entities: [__dirname + '/../entities/*.entity.{ts,js}'],
//   migrations: [__dirname + '/../../../migrations/*.{js,ts}'],
//   migrationsRun: true,
// });

// (async () => {
//   await appDataSource.initialize();
// })();
// export default appDataSource;
