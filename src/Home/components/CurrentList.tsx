import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { PlayListService } from "@/PlayList/Adapters/PlayListService";
import { PlayList } from "@/PlayList/Domain/models/PlayList";

export const CurrentList = () => {
    const playListService = PlayListService;

    const [currentList, setCurrentList] = useState<PlayList>();

    useEffect(() => {
        fetchCurrentList()
    }, [])

    const fetchCurrentList = async () => {
        const response = await playListService.getCurrent.execute()
        setCurrentList(response)
    }

    const dateTemplate = () => {
        const date = currentList!.date;
        const formatedDate = format(date, 'EEEE, d MMMM yyyy', { locale: es });
        return <>{formatedDate}</>

    }
    return (
        <div>
            <div className="flex justify-content-between align-items-center mb-3">
                <h1>Proximo Listado</h1>
                {currentList?.date && <p>{dateTemplate()}</p>}
            </div>
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
