import { CreateSongCase } from "../Application/useCases/Create";
import { GetAllSongCase } from "../Application/useCases/GetAll";
import { LocalStorageRepertoireRepository } from "../Infrastructure/LocalStorageRepertoireRepository";

const repository = new LocalStorageRepertoireRepository();

export const RepertoireService = {
    create: new CreateSongCase(repository),
    getAll: new GetAllSongCase(repository)
}