import { useEffect, useState } from 'react'
import { SongListService } from '../../services/Sevices.SongList';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ListDetail from './components/ListDetail';
import CreateList from './components/CreateList';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


export const SongList = () => {

    const songListService = new SongListService();

    const [songList, setSongList] = useState<any>([]);
    const [selectedList, setSelectedList] = useState<any>(null);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayDetails, setDisplayDetails] = useState(false);

    useEffect(() => {
        fetchSongList()
    }, [])

    const fetchSongList = async () => {
        const lists = await songListService.getAllList();
        console.log(lists);
        setSongList(lists);
    }

    const onRowSelect = () => {
        setDisplayDetails(true)
    };

    const dateTemplate = (e: any) => {
        const formatedDate = format(e.date, 'EEEE, d MMMM yyyy', { locale: es });

        return <>{formatedDate}</>
    }

    return (
        <div className='page-container'>
            <div className="flex justify-content-between mb-3">
                <h1>Listados</h1>
                <CreateList
                    visible={displayModal}
                    setVisible={setDisplayModal} />
            </div>

            <ListDetail
                selectedSong={selectedList}
                visible={displayDetails}
                setVisible={setDisplayDetails} />

            <DataTable value={songList} selectionMode="single"
                selection={selectedList!}
                onSelectionChange={(e) => setSelectedList(e.value)}
                dataKey="id"
                onRowSelect={onRowSelect}
                metaKeySelection={false} >
                <Column field="date" header="Fecha" body={dateTemplate}></Column>
                <Column field="time" header="Hora"></Column>
            </DataTable>
        </div>
    )
}

