import { Dialog } from 'primereact/dialog'
import { OrderList } from 'primereact/orderlist'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { SongList } from '../../../models/Model.SongList'
import SelectableRepertoire from '../../Repertoire/components/SelectableRepertoire'
import ListTimeSetter from './ListTimeSetter'

interface Props {
    saveListado: (e: any) => void;
    visible: boolean;
    onHide: any;
}

const ListCreationModal = ({ saveListado, visible, onHide }: Props) => {

    const [displayOrderList, setDisplayOrderList] = useState(false);
    const [newList, setNewList] = useState<SongList>({
        songs: [],
        created_at: 0,
        date: Date.now(),
        id: 0,
    });

    const footer = () => {
        return (
            <div style={{ height: '100%', marginTop: '10px' }}>
                {displayOrderList ? (
                    <Button label="Guardar" onClick={() => saveListado(newList)} />
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

    return (
        <div>
            <Dialog header="Nuevo Listado" footer={footer} visible={visible} className='modal' onHide={onHide} >
                <div className="card flex flex-column justify-content-around">
                    {displayOrderList ? (
                        <>
                            <ListTimeSetter
                                value={newList.date}
                                onChange={(e: any) => setNewList({ ...newList, date: e.value })} />
                            <OrderList
                                dataKey="id"
                                value={newList.songs}
                                onChange={(e) => setNewList({ ...newList, songs: e.value })}
                                itemTemplate={itemTemplate}
                                dragdrop />
                        </>
                    ) : (
                        <SelectableRepertoire
                            value={newList.songs}
                            onChange={(e) => setNewList({ ...newList, songs: e.value })}
                        />
                    )
                    }
                </div>
            </Dialog>
        </div>
    )
}

export default ListCreationModal
