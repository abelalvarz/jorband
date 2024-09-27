import { useEffect, useState } from "react";
import { RepertoireService } from "../../../services/Service.Repertoire";
import { useToast } from "../../../context/ToastContext";

const useRepertoire = () => {

    const toast = useToast();
    const songService = new RepertoireService();

    const [repertoire, setRepertoire] = useState<any>([]);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        fetchAllSong()
    }, [])

    const fetchAllSong = async () => {
        const response = await songService.getRepertoire();
        console.log(response)
        setRepertoire(response)
    }

    const saveSong = async (song: any) => {
        const response = await songService.addSong(song);

        if (response) {
            toast?.toast('success', 'Exito', 'Guardado Exitosamente');
            setVisible(false);
            fetchAllSong()
        }
    }
    return { visible, repertoire, setVisible, saveSong }
}

export default useRepertoire
