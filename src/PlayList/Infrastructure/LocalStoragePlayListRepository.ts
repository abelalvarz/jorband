import { openDB } from "idb";
import { PlayList } from "../Domain/models/PlayList";
import { PlayListRepository } from "../Domain/repositories/PlayListRepository";

const data_play_list = "data_play_list";

const database = openDB("jorband_database", 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains(data_play_list)) {
            db.createObjectStore(data_play_list, { keyPath: 'id', autoIncrement: true });
        }
    }
})

export class LocalStoragePlayListRepository implements PlayListRepository {

    async create(playList: PlayList): Promise<PlayList> {
        const dataTemplate = {
            date: playList.date,
            songs: playList.songs,
            created_at: Date.now()
        }

        console.log(playList);
        const db = await database;
        db.add(data_play_list, dataTemplate);
        
        return playList;
    }
    
    async getAll(): Promise<PlayList[]> {
        const db = await database;
        return await db.getAll(data_play_list)
    }

    async getCurrent(): Promise<PlayList> {
        const db = await database;
        const allLists = await db.getAll(data_play_list)

        const currentDate: Date = new Date();

        const futureLists = allLists.filter(list => new Date(list.date) > currentDate);

        futureLists.sort((a, b) => {
            const dateA: Date = new Date(a.date);
            const dateB: Date = new Date(b.date);

            return dateA.getTime() - dateB.getTime();
        });


        return futureLists[0] || null;
    }

}