import { PlayList } from "@/PlayList/Domain/models/PlayList";
import { PlayListRepository } from "@/PlayList/Domain/repositories/PlayListRepository";

export class CreatePlayListCase {
    constructor(private readonly repository: PlayListRepository) { }

    async execute(playList: PlayList): Promise<PlayList> {
        return this.repository.create(playList);
    }
}