import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useEffect, useState } from 'react'
import { RepertoireService } from '../../../services/Service.Repertoire';
import { Song } from '../../../models/Model.Song';

interface Props {
    value: any;
    onChange: (value: any) => void;
}
const SelectableRepertoire = ({ value, onChange }: Props) => {
    const repertoireService = new RepertoireService();

    const [repertoire, setRepertoire] = useState<Song[]>([]);
    useEffect(() => {
        fetchRepertoire()
    }, [])

    const fetchRepertoire = async () => {
        const response = await repertoireService.getRepertoire();
        setRepertoire(response)
    }
    return (
        <div>
            <DataTable
                value={repertoire}
                selectionMode={null}
                selection={value}
                onSelectionChange={onChange}
                dataKey="id" >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Nombre" headerStyle={{ width: '3rem' }}></Column>
                <Column field="chord" header="Nota" headerStyle={{ width: '3rem' }}></Column>
                <Column field="usage" header="Uso" headerStyle={{ width: '3rem' }}></Column>
            </DataTable>
        </div>
    )
}

export default SelectableRepertoire
