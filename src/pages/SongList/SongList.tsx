import ListCreationModal from "./components/ListCreationModal";
import PageHeader from "./components/PageHeader";
import ListDataView from "./components/ListDataView";
import useSongsList from "./hooks/useSongsList";
import { LayoutComponent } from "@/styled-components/LayoutComponent";

export const SongList = () => {
    const {songList, saveListado, displayModal, setDisplayModal} = useSongsList();

    return (
        <LayoutComponent>
            <PageHeader onClick={() => setDisplayModal(true)} />

            <ListCreationModal
                visible={displayModal}
                onHide={() => setDisplayModal(!displayModal)}
                saveListado={saveListado} />

            <ListDataView value={songList} />
        </LayoutComponent>
    )
}


