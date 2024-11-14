import { ISong } from "../types/ISong";

export interface PlayList {
    songs: ISong[];
    created_at: number;
    date: string | number | Date;
    id: number;
}