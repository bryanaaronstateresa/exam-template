import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../../', '.env') });

export const APP_PORT = process.env.APP_PORT || 3000;
export const APP_ENV = process.env.APP_ENV || 'localhost';
export const APP_VERSION = process.env.APP_VERSION || '0.0.1';

export const CORS_ALLOWED_HEADERS =
  process.env.CORS_ALLOWED_HEADERS ||
  'Access-Control-Allow-Headers,Origin,X-Requested-With,Content-Type,Accept,Authorization';
export const CORS_EXPOSED_HEADERS = process.env.CORS_EXPOSED_HEADERS || '';
export const CORS_WHITELIST = process.env.CORS_WHITELIST || '';

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = +process.env.DB_PORT || 5432;
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
export const DB_DATABASE = process.env.DB_DATABASE || 'postgres';
export const DB_LOGGING_FLAG = process.env.DB_LOGGING_FLAG || 'disabled';
