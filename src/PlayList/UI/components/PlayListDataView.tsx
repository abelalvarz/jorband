import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useState } from 'react'
import { PlayListDetail } from './PlayListDetail';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Props {
    value: any;
}

export const PlayListDataView = ({ value }: Props) => {
    const [selectedList, setSelectedList] = useState<any>(null);
    const [displayDetails, setDisplayDetails] = useState(false);

    const onRowSelect = (e: any) => {
        setSelectedList(e.value)
        setDisplayDetails(true);
        console.log(e.value);


    };

    const dateTemplate = (e: any) => {
        const formatedDate = format(e.date, 'EEEE, d MMMM yyyy', { locale: es });
        return <>{formatedDate}</>
    }

    const onhide = () => {
        setSelectedList(null);
        setDisplayDetails(!displayDetails);
    }

    return (
        <div>
            <DataTable

                value={value}
                selectionMode="single"
                selection={selectedList}
                onSelectionChange={(e) => onRowSelect(e)}
                dataKey="id"
                // onRowUnselect={onRowUnselect}
                emptyMessage="Sin Listados"
                metaKeySelection={false} >
                <Column field="date" header="Fecha" body={dateTemplate}></Column>
                <Column field="time" header="Hora"></Column>
            </DataTable>
            <PlayListDetail
                visible={displayDetails}
                onHide={onhide}
                value={selectedList} />
        </div>
    )
}

