import { database, ListProvider } from "./Service.Database";


export class SongListService {

    listProvider = new ListProvider;

    async createList(data: any) {
        const dataTemplate = {
            date: Date.parse(data.date.date),
            time: data.date.time,
            songs: data.songs,
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

    async getCurrentList() {
        const db = await database;
        const allLists = await db.getAll('Song_List')
        return allLists.sort((a, b) => {
            const currentDate: Date = new Date();  // Fecha actual

            const dateA: Date = new Date(a.date);  // Convierte el campo 'date' del primer objeto a una fecha
            const dateB: Date = new Date(b.date);  // Convierte el campo 'date' del segundo objeto a una fecha

            // Compara cuál fecha está más cerca de la fecha actual
            return Math.abs(dateA.getTime() - currentDate.getTime()) - Math.abs(dateB.getTime() - currentDate.getTime());
        })[0];
    }
}
