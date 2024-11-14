import { openDB } from "idb";
import { Song } from "../Domain/models/Model.Song";
import { SongRepository } from "../Domain/repositories/SongRepository";

const data_play_list = "jb_repertoire";

const database = openDB("jorband_database", 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains(data_play_list)) {
            db.createObjectStore(data_play_list, { keyPath: 'id', autoIncrement: true });
        }
    }
})

export class LocalStorageRepertoireRepository implements SongRepository {
    async create(song: Song): Promise<Song> {
        try {
            const db = await database;
            db.add(data_play_list, song);
            return Promise.resolve(song);
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async getAll(): Promise<Song[]> {
        try {
            const song: Song[] = []
            const db = await database;
            const response = await db.getAll(data_play_list);
            console.log(response);
            return Promise.resolve(song);
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

}