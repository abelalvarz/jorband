import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { OrderList } from 'primereact/orderList';
import SongViewData from '../../Repertoire/components/SongViewData';
import { useState } from 'react';
import { SongListService } from '../../../services/Sevices.SongList';
import { Song } from '../../../models/Model.Song';
import { Calendar } from 'primereact/calendar';


interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
}
const CreateList = ({ visible, setVisible }: Props) => {

    const listService = new SongListService();

    const [selectedSong, setSelectedSong] = useState([]);
    const [displayOrderList, setDisplayOrderList] = useState(false);
    const [listDate, setListDate] = useState<any>();

    const footer = () => {
        return (
            <div style={{ height: '100%', marginTop: '10px' }}>
                {displayOrderList ? (
                    <Button label="Guardar" onClick={saveListado} />
                ) : (
                    <Button label="Continuar" onClick={() => setDisplayOrderList(!displayOrderList)} />
                )}
            </div>
        )
    }

    const itemTemplate = (item: any) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span>{item.name}</span>
                </div>
                <span>{item.chord}</span>
            </div>
        );
    };

    const saveListado = () => {
        const songsToSave = selectedSong.map((song: Song) => {
            return { name: song.name, chord: song.chord, usage: song.usage }
        })
        console.log("song:", songsToSave)

        const response = listService.createList(songsToSave)
        console.log(response)
    }

    return (
        <div>
            <Button label="Nuevo Listado" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Nuevo Listado" footer={footer} visible={visible} style={{ width: '100%', height: '90vh' }} onHide={() => setVisible(!visible)} >
                <div className="card flex flex-column justify-content-around">
                    {displayOrderList ? (
                        <>
                            <div className="">
                                <label htmlFor="buttondisplay" className=" block mb-2">
                                    Fecha del Listado:
                                </label>
                                <Calendar id="buttondisplay" style={{width:'100%'}} value={listDate} onChange={(e) => setListDate(e.value)} showIcon />
                            </div>
                            <OrderList
                                dataKey="id"
                                value={selectedSong}
                                onChange={(e) => setSelectedSong(e.value)}
                                itemTemplate={itemTemplate}
                                // header="Ordenar Listado"
                                dragdrop />

                        </>
                    ) : (
                        <SongViewData
                            selection
                            selected={selectedSong}
                            setSelected={setSelectedSong} />
                    )
                    }

                </div>
            </Dialog>
        </div>
    )
}

export default CreateList
