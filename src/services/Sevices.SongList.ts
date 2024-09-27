import { database, ListProvider } from "./Service.Database";


export class SongListService {

    listProvider = new ListProvider;

    async createList(data: any) {        
        const dataTemplate = {
            date: Date.now(),
            songs: data,
            created_at: Date.now()
        }

        const savedList = this.listProvider.add(dataTemplate);
        console.log(savedList);
        return savedList;
    }

    async getAllList() {
        const db = await database;
        return await db.getAll('Song_List')
    }
}
