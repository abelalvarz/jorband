import { Dialog } from 'primereact/dialog'
import { OrderList } from 'primereact/orderlist'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { PlayListTimeSetter } from './PlayListTimeSetter'
import { PlayList } from '@/PlayList/Domain/models/PlayList'
import { SelectRepertoire } from '@/Shared/components/SelectRepertoire'

interface Props {
    saveListado: (e: any) => void;
    visible: boolean;
    onHide: any;
}

export const PlayListCreationDialog = ({ saveListado, visible, onHide }: Props) => {

    const initialState = {
        songs: [],
        created_at: 0,
        date: Date.now(),
        id: 0,
    }

    const [displayOrderList, setDisplayOrderList] = useState(false);
    const [playList, setPlayList] = useState<PlayList>(initialState);

    const footer = () => {
        return (
            <div style={{ height: '100%', marginTop: '10px' }}>
                {displayOrderList ? (
                    <Button label="Guardar" onClick={() => saveListado(playList)} />
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
                            <PlayListTimeSetter
                                value={playList.date}
                                onChange={(e: any) => setPlayList({ ...playList, date: e.value })} />
                            <OrderList
                                dataKey="id"
                                value={playList.songs}
                                onChange={(e) => setPlayList({ ...playList, songs: e.value })}
                                itemTemplate={itemTemplate}
                                dragdrop />
                        </>
                    ) : (
                        <SelectRepertoire
                            value={playList.songs}
                            onChange={(e) => setPlayList({ ...playList, songs: e.value })}
                        />
                    )
                    }
                </div>
            </Dialog>
        </div>
    )
}


