import { useEffect, useState } from "react";
import { useToast } from "../../../context/ToastContext";
import { SongListService } from "../../../services/Sevices.SongList";

const useSongsList = () => {
    const toast = useToast();
    const listService = new SongListService();

    const [songList, setSongList] = useState<any>([]);
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        fetchSongList()
    }, [])

    const fetchSongList = async () => {
        const lists = await listService.getAllList();
        console.log(lists);
        setSongList(lists);
    }

    const saveListado = async (list: any) => {
        const response = await listService.createList(list)
        if (response) {
            toast?.toast('success', 'Exito', 'Listado Creado!')
            fetchSongList();
            setDisplayModal(!displayModal)
        }
    }
    return {songList, saveListado, displayModal, setDisplayModal}
}

export default useSongsList
