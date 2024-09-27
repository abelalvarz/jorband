import { database, ListProvider } from "./Service.Database";


export class SongListService {

    listProvider = new ListProvider;

    async createList(data: any) {
        const dataTemplate = {
            date: Date.parse(data.date),
            songs: data.songs,
            created_at: Date.now()
        }

        const savedList = this.listProvider.add(dataTemplate);
        return savedList;
    }

    async getAllList() {
        const db = await database;
        return await db.getAll('Song_List')
    }

    async getCurrentList() {
        const db = await database;
        const allLists = await db.getAll('Song_List')

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
