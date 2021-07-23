import * as mongoose from 'mongoose';
import { dbOptions } from '../config/databaseconfig';

export default function initializeDatabase() {
  mongoose.connect(process.env.NX_DATABASE_URI, dbOptions);

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log('Connected to mongodb');
  });

  connection.on('error', (err) => {
    console.log(err);
  });
}

export const db = mongoose.connection;
