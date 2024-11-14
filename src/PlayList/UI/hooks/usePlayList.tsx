import { useToast } from "@/App/context/ToastContext";
import { PlayListService } from "@/PlayList/Adapters/PlayListService";
import { useEffect, useState } from "react";

export const useSongsList = () => {

    const toast = useToast();
    const service = PlayListService;

    const [playList, setPlayList] = useState<any>([]);
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        fetchSongList()
    }, [])

    const fetchSongList = async () => {
        const lists = await service.getAll.execute();
        console.log(lists);
        setPlayList(lists);
    }

    const saveListado = async (list: any) => {
        const response = await service.create.execute(list)
        if (response) {
            toast?.toast('success', 'Exito', 'Listado Creado!')
            fetchSongList();
            setDisplayModal(!displayModal)
        }
    }
    return { playList, saveListado, displayModal, setDisplayModal }
}


