import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Song } from "../../../models/Model.Song";
import { RepertoireService } from "../../../services/Service.Repertoire";

interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export default function CreateSong({ visible, setVisible }: Props) {
    const songService = new RepertoireService();

    const [newSong, setNewSong] = useState<Song>({
        name: '',
        chord: '',
        usage: 0
    })

    const saveNewSong = async () => {
        const response = await songService.addSong(newSong);
        console.log(response);
    }

    return (
        <div>
            <Button label="Agregar Canción" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Agregar Canción" visible={visible} style={{ width: '100%' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className="card flex flex-column justify-content-around">
                    <div className="m-1 w-full">
                        <InputText placeholder="Enter song name" onChange={(e) => setNewSong({ ...newSong, name: e.target.value })} />
                    </div>
                    <div className="m-1">
                        <InputText placeholder="Chord" onChange={(e) => setNewSong({ ...newSong, chord: e.target.value })} />
                    </div>
                    <div className="m-1">
                        <Button label="Guardar" onClick={() => saveNewSong()} />
                    </div>

                </div>
            </Dialog>
        </div>
    )
}

