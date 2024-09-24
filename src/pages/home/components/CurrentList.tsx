import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useState } from 'react'
import { Tag } from 'primereact/tag';
import { Rating } from 'primereact/rating';

const CurrentList = () => {

    const [songs, setSongs] = useState([]);

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
        return <Rating value={song.rating} readOnly cancel={false} />;
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Proximo Listado</span>
        </div>
    );

    return (
        <div className="card">
            <DataTable header={header} value={songs} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    )
}

export default CurrentList
