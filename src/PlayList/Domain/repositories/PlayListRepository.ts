import { PlayList } from "../models/PlayList";

export interface PlayListRepository {
    create(playList: PlayList):Promise<PlayList>;
    getAll():Promise<PlayList[]>;
    getCurrent():Promise<PlayList>;
}