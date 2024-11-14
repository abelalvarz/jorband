import { SongRepository } from "@/Repertoire/Domain/repositories/SongRepository";
import { Song } from "@/Repertoire/Domain/models/Model.Song";

export class GetAllSongCase {
    constructor(private readonly repository: SongRepository) { }

    async execute(): Promise<Song[]> {
        return this.repository.getAll();
    }
}