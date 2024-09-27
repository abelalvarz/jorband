import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { SongListService } from '../../../services/Sevices.SongList';
import { Song } from '../../../models/Model.Song';
import { OrderList } from 'primereact/orderlist';
import ListTimeSetter from './ListTimeSetter';
import SongViewData from '../../Repertoire/components/SongViewData';


interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
}
const CreateList = ({ visible, setVisible }: Props) => {

    const listService = new SongListService();

    const [selectedSong, setSelectedSong] = useState([]);
    const [displayOrderList, setDisplayOrderList] = useState(false);
    const [listDate, setListDate] = useState<any>({
        date: null,
        time: null
    });

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
        const response = listService.createList({date: listDate, songs: songsToSave})
        console.log(response)
    }

    return (
        <div>
            <Button label="Nuevo Listado" onClick={() => setVisible(true)} />
            <Dialog header="Nuevo Listado" footer={footer} visible={visible} style={{ width: '100%', height: '90vh' }} onHide={() => setVisible(!visible)} >
                <div className="card flex flex-column justify-content-around">
                    {displayOrderList ? (
                        <>
                            <ListTimeSetter
                                listDate={listDate}
                                setListDate={setListDate} />
                            <OrderList
                                dataKey="id"
                                value={selectedSong}
                                onChange={(e: any) => setSelectedSong(e.value)}
                                itemTemplate={itemTemplate}
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
