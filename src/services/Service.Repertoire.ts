import { Song } from "../models/Model.Song";
import { database, RepertoireProvider } from "./Service.Database";

export class RepertoireService {
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
        return db.getAll('Repertoire');
    }
}