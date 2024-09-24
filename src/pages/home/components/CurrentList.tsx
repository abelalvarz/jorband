import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useEffect, useState } from 'react'
import { Tag } from 'primereact/tag';
import { Rating } from 'primereact/rating';

interface SongModel {
    name: string,
    chord: string,
    usage: number
}

const songList: SongModel[] = [
    { name: "El santo de Israel", chord: "Am", usage: 50 },
    { name: "El santo de Israel", chord: "Am", usage: 50 },
    { name: "El santo de Israel", chord: "Am", usage: 50 },
    { name: "El santo de Israel", chord: "Am", usage: 50 },
    { name: "El santo de Israel", chord: "Am", usage: 50 },
]

const CurrentList = () => {

    const [songs, setSongs] = useState<SongModel[]>([]);

    useEffect(() => {
        setSongs(songList)
    }, [])

    const getSeverity = (song: any) => {
        switch (song.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const statusBodyTemplate = (song: any) => {
        return <Tag value={song.inventoryStatus} severity={getSeverity(song)}></Tag>;
    };

    const ratingBodyTemplate = (song: any) => {
        return <Rating value={100 / song.usage} readOnly cancel={false} />;
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Proximo Listado</span>
        </div>
    );

    return (
        <div className="flex align-items-center justify-content-center w-full" >
            <div className="card " style={{ width: '50%' }}>
                <DataTable header={header} value={songs} tableStyle={{ minWidth: '40rem' }}>
                    <Column field="name" header="Nombre"></Column>
                    <Column field="chord" header="Nota"></Column>
                    <Column field="usage" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default CurrentList
