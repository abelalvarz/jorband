import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Song } from '../../../models/Model.Song';

interface Props {
    visible: boolean;
    setVisible: (e: any) => void;
    saveSong: (e: any) => void;
}

export const CreateSongDialog = ({ visible, setVisible, saveSong }: Props) => {

    const [newSong, setNewSong] = useState<Song>({
        name: '',
        chord: '',
        usage: 0
    })

    return (
        <Dialog
            header="Agregar Canción"
            visible={visible}
            className='modal'
            onHide={() => setVisible(!visible)}>
            <div className="card flex flex-column justify-content-around">
                <div className="m-1 w-full">
                    <InputText className='w-full' placeholder="Nombre" onChange={(e) => setNewSong({ ...newSong, name: e.target.value })} />
                </div>
                <div className="m-1 w-full">
                    <InputText className='w-full' placeholder="Nota" onChange={(e) => setNewSong({ ...newSong, chord: e.target.value })} />
                </div>
                <div className="m-1">
                    <Button label="Guardar" onClick={() => saveSong(newSong)} />
                </div>
            </div>
        </Dialog>
    )
}
