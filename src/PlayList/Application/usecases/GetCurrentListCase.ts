import { PlayList } from "@/PlayList/Domain/models/PlayList";
import { PlayListRepository } from "@/PlayList/Domain/repositories/PlayListRepository";

export class GetCurrentPlayListCase {
    constructor(private readonly repository: PlayListRepository) { }

    async execute(): Promise<PlayList> {
        return this.repository.getCurrent();
    }
}