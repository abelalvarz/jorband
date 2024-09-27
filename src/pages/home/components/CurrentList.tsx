import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { SongListService } from "../../../services/Sevices.SongList";
import { useEffect, useState } from "react";
import { SongList } from "../../../models/Model.SongList";
import { format } from "date-fns";
import { es } from 'date-fns/locale';

export default function CurrentList() {
    const listService = new SongListService()

    const [currentList, setCurrentList] = useState<SongList>();

    useEffect(() => {
        fetchCurrentList()
    }, [])

    const fetchCurrentList = async () => {
        const response = await listService.getCurrentList()
        setCurrentList(response)
    }

    const dateTemplate = () => {
        const date = currentList!.date;
        const formatedDate = format(date, 'EEEE, d MMMM yyyy', {locale: es});
        return <>{formatedDate}</>

    }
    return (
        <div>
            <h1>Proximo Listado</h1>
            {currentList?.date && <p>{dateTemplate()}</p>}
            <div className="card">
                <DataTable
                    value={currentList?.songs}
                    dataKey="name" >
                    <Column field="name" header="Nombre" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="chord" header="Nota" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="usage" header="Uso" headerStyle={{ width: '3rem' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}
