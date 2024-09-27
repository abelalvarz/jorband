import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useState } from 'react'
import ListDetail from './ListDetail';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Props {
    value: any;
}
const ListDataView = ({ value }: Props) => {
    const [selectedList, setSelectedList] = useState<any>(null);
    const [displayDetails, setDisplayDetails] = useState(false);

    const onRowSelect = () => {
        setDisplayDetails(true)
    };

    const dateTemplate = (e: any) => {
        const formatedDate = format(e.date, 'EEEE, d MMMM yyyy', { locale: es });
        return <>{formatedDate}</>
    }

    return (
        <div>
            <DataTable value={value} selectionMode="single"
                selection={selectedList!}
                onSelectionChange={(e) => setSelectedList(e.value)}
                dataKey="id"
                onRowSelect={onRowSelect}
                metaKeySelection={false} >
                <Column field="date" header="Fecha" body={dateTemplate}></Column>
                <Column field="time" header="Hora"></Column>
            </DataTable>
            <ListDetail
                visible={displayDetails}
                setVisible={setDisplayDetails}
                value={selectedList} />
        </div>
    )
}

export default ListDataView
