import { Song } from '@/Repertoire/Domain/models/Model.Song';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

interface Props {
    visible: boolean;
    setVisible: (e: any) => void;
    saveSong: (e: any) => void;
}

const chords = [
    { id: 0, name: "Am" }
]

export const CreateSongDialog = ({ visible, setVisible, saveSong }: Props) => {
    
    const initialState: Song = {
        id: null,
        name: '',
        chord: '',
        usage: 0
    }
    const [song, setSong] = useState<Song>(initialState);

    const handleOnChange = (e: any) => {
        setSong({
            ...song,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Dialog
            header="Agregar Canción"
            visible={visible}
            className='modal'
            onHide={() => setVisible(!visible)}>
            <div className="card flex flex-column justify-content-around">
                <div className="m-1 w-full">
                    <InputText className='w-full' name='name' placeholder="Nombre" onChange={(e) => handleOnChange(e)} />
                </div>
                <div className="m-1 w-full">
                    <Dropdown name="chord" value={song.chord} onChange={(e) => handleOnChange(e)} options={chords} optionLabel="name"
                        placeholder="Seleccionar Nota" className="w-full md:w-14rem" />
                </div>
                <div className="m-1 ">
                    <Button label="Guardar" onClick={() => saveSong(song)} />
                </div>
            </div>
        </Dialog>
    )
}
