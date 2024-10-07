import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

interface Props {
    value: any;
    visible: boolean;
    onHide: any;
}
export default function ListDetail({ value, visible, onHide }: Readonly<Props>) {

    const footer = () => {
        return (
            <div style={{ height: '100%', marginTop: '10px' }}>
                <Button label="Regresar" onClick={onHide} />

            </div>
        )
    }
    return (
        <div>
            <Dialog header="Detalles del Listado"
                footer={footer}
                visible={visible} 
                className='modal'
                onHide={onHide} >
                <DataTable value={value?.songs}
                    selectionMode={null}
                    selection={null}
                    dataKey="id" >
                    <Column field="name" header="Nombre" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="chord" header="Nota" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="usage" header="Uso" headerStyle={{ width: '3rem' }}></Column>
                </DataTable>
            </Dialog>
        </div>
    )
}
