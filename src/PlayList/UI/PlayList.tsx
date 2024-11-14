import { PageHeader } from "./components/PageHeader";
import { PlayListCreationDialog } from "./components/PlayListCreationDialog";
import { PlayListDataView } from "./components/PlayListDataView";
import { useSongsList } from "./hooks/usePlayList";
import { LayoutComponent } from "@/App/styled-components/LayoutComponent";

export const SongList = () => {
    const { playList, saveListado, displayModal, setDisplayModal } = useSongsList();

    return (
        <LayoutComponent>
            <PageHeader onClick={() => setDisplayModal(true)} />

            <PlayListCreationDialog
                visible={displayModal}
                onHide={() => setDisplayModal(!displayModal)}
                saveListado={saveListado} />

            <PlayListDataView value={playList} />
        </LayoutComponent>
    )
}


