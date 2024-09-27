import { Song } from "./Model.Song";

export interface SongList {
    songs: Song[];
    created_at: number;
    date: number | null;
    id: number;
}