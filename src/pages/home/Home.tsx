import { useEffect, useState } from "react"
import { DataView } from 'primereact/dataview'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
interface SongModel {
    name: string;
    chord: string
}

const listSong = [
    { name: "El santo de Israel", chord: "Am" },
    { name: "El santo de Israel", chord: "Am" },
]

const Home = () => {

    const [currentList, setCurrentList] = useState<SongModel[]>([]);
    const [visible, setVisible] = useState(false);
    const [newSong, setNewSong] = useState({
        name: '',
        chord: ''
    })

    useEffect(() => {
        setCurrentList(listSong)
    }, [])

    const listTemplate = (items: SongModel[]) => {

        const itemList = items.map((i: SongModel, index: number) => {
            return (
                <div className="card flex justify-content-between surface-400 m-1 border-round p-2 " key={index}>
                    <p>{i.name}</p>
                    <p>{i.chord}</p>
                </div>
            )
        })
        return <div className="grid grid-nogutter flex-column ">{itemList}</div>
    }

    const createNewList = () => {
        listSong.push(newSong);
        setVisible(false)
    }

    return (
        <div style={{ maxWidth: '768px' }}>
            <h1>Proximo Listado</h1>

            <Button label="Agregar Canción" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Agregar Canción" visible={visible} style={{ width: '100%' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className="card flex flex-column justify-content-around">
                    <div className="m-1 w-full">
                        <InputText placeholder="Enter song name" onChange={(e) => setNewSong({ ...newSong, name: e.target.value })} />
                    </div>
                    <div className="m-1">
                        <InputText placeholder="Chord" onChange={(e) => setNewSong({ ...newSong, chord: e.target.value })} />
                    </div>
                    <div className="m-1">
                        <Button label="Guardar" onClick={() => createNewList()} />
                    </div>

                </div>
            </Dialog>

            <div className="card">
                <DataView value={currentList} listTemplate={listTemplate} />
            </div>
        </div>
    )
}

export default Home
