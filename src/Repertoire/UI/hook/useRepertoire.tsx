import { useEffect, useState } from "react";
import { RepertoireService } from "@/Repertoire/Adapters/RepertoireService";
import { useToast } from "@/App/context/ToastContext";

export const useRepertoire = () => {

    const toast = useToast();
    const service = RepertoireService;

    const [repertoire, setRepertoire] = useState<any>([]);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        fetchAllSong()
    }, [])

    const fetchAllSong = async () => {
        const response = await service.getAll.execute();
        console.log(response)
        if (response) {
            setRepertoire(response)
        }
    }

    const saveSong = async (song: any) => {
        const response = await service.create.execute(song);

        if (response) {
            toast?.toast('success', 'Exito', 'Guardado Exitosamente');
            setVisible(false);
            fetchAllSong()
        }
    }

    return { visible, repertoire, setVisible, saveSong }
}

