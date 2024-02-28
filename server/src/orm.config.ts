import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: false,
    ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    CLI: {
      migrationsDir: 'src/migrations',
    },
    MIGRATIONS_RUN: true,
  };

  let ormconfig: TypeOrmModuleOptions = {
    name: 'default',
    type: 'postgres',
    database: '../target/db/sqlite-dev-db.sql',
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };

  if (process.env.BACKEND_ENV === 'prod') {
    ormconfig = {
      name: 'default',
      type: 'cockroachdb',
      database: 'api_product_test',
      host: 'devproduct-8717.8nk.gcp-asia-southeast1.cockroachlabs.cloud',
      port: 26257,
      username: 'api_product_test',
      password: 'SGQyynv3bftQ-PnXUI3gfw',
      logging: false,
      synchronize: commonConf.SYNCRONIZE,
      entities: commonConf.ENTITIES,
      migrations: commonConf.MIGRATIONS,
      cli: commonConf.CLI,
      migrationsRun: commonConf.MIGRATIONS_RUN,
    };
  }

  if (process.env.BACKEND_ENV === 'test') {
    ormconfig = {
      name: 'default',
      type: 'sqlite',
      database: ':memory:',
      keepConnectionAlive: true,
      logging: true,
      synchronize: true,
      entities: commonConf.ENTITIES,
      migrations: commonConf.MIGRATIONS,
      cli: commonConf.CLI,
      migrationsRun: commonConf.MIGRATIONS_RUN,
    };
  }

  if (process.env.BACKEND_ENV === 'dev') {
    ormconfig = {
      name: 'default',
      type: 'cockroachdb',
      database: 'api_product_test',
      host: 'devproduct-8717.8nk.gcp-asia-southeast1.cockroachlabs.cloud',
      port: 26257,
      username: 'api_product_test',
      password: 'SGQyynv3bftQ-PnXUI3gfw',
      logging: false,
      ssl: true,
      synchronize: commonConf.SYNCRONIZE,
      entities: commonConf.ENTITIES,
      migrations: commonConf.MIGRATIONS,
      cli: commonConf.CLI,
      migrationsRun: commonConf.MIGRATIONS_RUN,
    };
  }

  return ormconfig;
}

export { ormConfig };
