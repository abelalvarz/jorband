import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

interface Props {
    repertoire: any;
}

const RepertoireTable = ({ repertoire }: Props) => {
    return (
        <div>
            <DataTable
                value={repertoire}
                dataKey="id" >
                <Column field="name" header="Nombre" headerStyle={{ width: '3rem' }}></Column>
                <Column field="chord" header="Nota" headerStyle={{ width: '3rem' }}></Column>
                <Column field="usage" header="Uso" headerStyle={{ width: '3rem' }}></Column>
            </DataTable>
        </div>
    )
}

export default RepertoireTable
