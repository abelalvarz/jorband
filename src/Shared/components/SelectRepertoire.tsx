import { RepertoireService } from '@/Repertoire/Adapters/RepertoireService';
import { Song } from '@/Repertoire/Domain/models/Model.Song';
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useEffect, useState } from 'react'

interface Props {
    value: any;
    onChange: (value: any) => void;
}
export const SelectRepertoire = ({ value, onChange }: Props) => {
    const repertoireService = RepertoireService;

    const [repertoire, setRepertoire] = useState<Song[]>([]);
    useEffect(() => {
        fetchRepertoire()
    }, [])

    const fetchRepertoire = async () => {
        const response = await repertoireService.getAll.execute();
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
