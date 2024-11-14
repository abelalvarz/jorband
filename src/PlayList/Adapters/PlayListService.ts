import { CreatePlayListCase } from "../Application/usecases/CreatePlayListCase";
import { GetAllPlayListCase } from "../Application/usecases/GetAllPlayListCase";
import { GetCurrentPlayListCase } from "../Application/usecases/GetCurrentListCase";
import { LocalStoragePlayListRepository } from "../Infrastructure/LocalStoragePlayListRepository";

const repository = new LocalStoragePlayListRepository();

export const PlayListService = {
    create: new CreatePlayListCase(repository),
    getAll: new GetAllPlayListCase(repository),
    getCurrent: new GetCurrentPlayListCase(repository)
}