import axios from "axios";
import { Song } from "../Domain/models/Model.Song";
import { SongRepository } from "../Domain/repositories/SongRepository";


export class AxiosRepertoireRepository implements SongRepository {

    BASE_URL = "http://localhost";

    create(song: Song): Promise<Song> {
        return axios.post(this.BASE_URL, song);
    }
    
    getAll(): Promise<Song[]> {
        return axios.get(this.BASE_URL);
    }

}