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

const CreateSongDialog = ({ visible, setVisible, saveSong }: Props) => {
    const [newSong, setNewSong] = useState<Song>({
        name: '',
        chord: '',
        usage: 0
    })
    return (
        <div>
            <Button label="Agregar Canción" onClick={() => setVisible(true)} />
            <Dialog header="Agregar Canción" visible={visible} style={{ width: '100%' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className="card flex flex-column justify-content-around">
                    <div className="m-1 w-full">
                        <InputText placeholder="Enter song name" onChange={(e) => setNewSong({ ...newSong, name: e.target.value })} />
                    </div>
                    <div className="m-1">
                        <InputText placeholder="Chord" onChange={(e) => setNewSong({ ...newSong, chord: e.target.value })} />
                    </div>
                    <div className="m-1">
                        <Button label="Guardar" onClick={() => saveSong(newSong)} />
                    </div>

                </div>
            </Dialog>
        </div>
    )
}

export default CreateSongDialog
