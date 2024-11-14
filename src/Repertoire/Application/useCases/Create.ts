import { SongRepository } from "@/Repertoire/Domain/repositories/SongRepository"
import { Song } from "@/Repertoire/Domain/models/Model.Song"

export class CreateSongCase {
    constructor(private readonly repository: SongRepository) { }

    async execute(song: Song): Promise<Song> {
        return this.repository.create(song);
    }
}