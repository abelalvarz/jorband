import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

interface Props {
    selectedSong: any;
    visible: boolean;
    setVisible: any;
}
export default function ListDetail({ selectedSong, visible, setVisible }: Props) {

    const footer = () => {
        return (
            <div style={{ height: '100%', marginTop: '10px' }}>
                <Button label="Regresar" onClick={() => setVisible(!visible)} />

            </div>
        )
    }
    return (
        <div>
            <Dialog header="Detalles del Listado" footer={footer} visible={visible} style={{ width: '100%', height: '90vh' }} onHide={() => setVisible(!visible)} >
                <DataTable value={selectedSong?.songs}
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
