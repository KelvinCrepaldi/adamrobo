import Dexie, { Table } from 'dexie';
import { IAccount } from '../types/database';

export class MySubClassedDexie extends Dexie {
  account!: Table<IAccount>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      account: '++id, name, email, telephone'
    });
  }
}

export const db = new MySubClassedDexie();
