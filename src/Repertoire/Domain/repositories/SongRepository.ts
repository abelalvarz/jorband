import { Song } from "@/Repertoire/Domain/models/Model.Song";

export interface SongRepository {
    create(song: Song): Promise<Song>;
    getAll(): Promise<Song[]>;
}