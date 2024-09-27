import ListCreationModal from "./components/ListCreationModal";
import PageHeader from "./components/PageHeader";
import ListDataView from "./components/ListDataView";
import useSongsList from "./hooks/useSongsList";

const SongList = () => {

    const {songList, saveListado, displayModal, setDisplayModal} = useSongsList();

    return (
        <div className='page-container'>
            <PageHeader onClick={() => setDisplayModal(true)} />

            <ListCreationModal
                visible={displayModal}
                onHide={() => setDisplayModal(!displayModal)}
                saveListado={saveListado} />

            <ListDataView value={songList} />
        </div>
    )
}

export default SongList


