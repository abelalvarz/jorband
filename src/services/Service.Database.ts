import { openDB } from 'idb';

export const database = openDB("Jorband_DB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('Song_List')) {
      db.createObjectStore('Song_List', { keyPath: 'id', autoIncrement: true });
    }

    if (!db.objectStoreNames.contains('Repertoire')) {
      db.createObjectStore('Repertoire', { keyPath: 'id', autoIncrement: true });
    }
  }
});

interface RepertoireStructure {
  name: string,
  chord: string,
  usage: number,
  created_at: any
}

export class RepertoireProvider {
  async add(data: RepertoireStructure) {
    const db = await database;
    return db.add('Repertoire', data);
  }
}

interface ListStructure {
  date: any;
  songs: any;
  created_at: number
}

export class ListProvider {
  async add(data: ListStructure) {
    const db = await database;
    return db.add('Song_List', data);
  }
}
