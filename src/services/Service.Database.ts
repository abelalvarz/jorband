import { openDB } from 'idb';


export const data_play_list = "data_play_list";
export const data_repertoire = "data_repertoire";


export const database = openDB("jorband_database", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(data_play_list)) {
      db.createObjectStore(data_play_list, { keyPath: 'id', autoIncrement: true });
    }

    if (!db.objectStoreNames.contains(data_repertoire)) {
      db.createObjectStore(data_repertoire, { keyPath: 'id', autoIncrement: true });
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
    return db.add(data_repertoire, data);
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
    return db.add(data_play_list, data);
  }
}
