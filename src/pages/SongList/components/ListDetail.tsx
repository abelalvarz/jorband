import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

interface Props {
    value: any;
    visible: boolean;
    setVisible: any;
}
export default function ListDetail({ value, visible, setVisible }: Props) {

    const footer = () => {
        return (
            <div style={{ height: '100%', marginTop: '10px' }}>
                <Button label="Regresar" onClick={() => setVisible(!visible)} />

            </div>
        )
    }
    return (
        <div>
            <Dialog header="Detalles del Listado" footer={footer} visible={visible} className='modal' onHide={() => setVisible(!visible)} >
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
