import {
  DB_DATABASE,
  DB_HOST,
  DB_LOGGING_FLAG,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from '@common/environment';
import { UserEntity } from '@entities/users.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfiguration = {
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  synchronize: true,
  logging: DB_LOGGING_FLAG === 'enabled',
  autoLoadEntities: true,
};

export const databaseConfig: TypeOrmModuleOptions = {
  ...dbConfiguration,
  type: 'postgres',
};
