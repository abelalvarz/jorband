import CreateSongDialog from "./components/CreateSongDialog";
import RepertoireTable from "./components/RepertoireView";
import useRepertoire from "./hook/useRepertoire";

export const Repertoire = () => {
    const { visible, setVisible, saveSong, repertoire } = useRepertoire();
    return (
        <div className="page-container">
            <div className="flex justify-content-between mb-3">
                <h1>Repertorio</h1>
                <CreateSongDialog visible={visible} setVisible={setVisible} saveSong={saveSong} />
            </div>
            <RepertoireTable repertoire={repertoire} />
        </div>
    )
}

