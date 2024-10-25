import { Song } from "../models/Model.Song";
import { data_repertoire, database, RepertoireProvider } from "./Service.Database";

export interface RepertoireServiceInteface{
    addSong: (song: Song) => any;
    getRepertoire: ()=>any;
}

export class RepertoireService implements RepertoireServiceInteface {
    repertoire = new RepertoireProvider;

    async addSong(song: Song) {
        const dataTemplate = {
            name: song.name,
            chord: song.chord,
            usage: song.usage,
            created_at: Date.now()
        }
        return this.repertoire.add(dataTemplate);
    }

    async getRepertoire() {
        const db = await database;
        return db.getAll(data_repertoire);
    }
}