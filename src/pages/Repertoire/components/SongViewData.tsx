import { useEffect, useState } from "react";
import { RepertoireService } from "../../../services/Service.Repertoire";
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

interface Props {
    selection?: boolean;
    selected?: any;
    setSelected?: any;
}
export default function SongViewData({ selection, selected, setSelected }: Props) {
    const songService = new RepertoireService();
    const [repertoire, setRepertoire] = useState<any>([]);


    useEffect(() => {
        fetchAllSong()
    }, [])

    const fetchAllSong = async () => {
        const response = await songService.getRepertoire();
        console.log(response)
        setRepertoire(response)
    }

    return (
        <div>

            <DataTable value={repertoire}
                selectionMode={null}
                selection={selected ? selected : null} onSelectionChange={(e) => setSelected(e.value)}
                dataKey="id" >
                {
                    selection && (
                        <Column selectionMode="multiple" headerStyle={{ width: '1rem' }} ></Column>
                    )
                }
                <Column field="name" header="Nombre" headerStyle={{ width: '3rem' }}></Column>
                <Column field="chord" header="Nota" headerStyle={{ width: '3rem' }}></Column>
                <Column field="usage" header="Uso" headerStyle={{ width: '3rem' }}></Column>
            </DataTable>
        </div>
    )
}
