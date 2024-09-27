import { useState } from "react";
import CreateSong from "./components/CreateSong"
import SongViewData from "./components/SongViewData";

const Repertoire = () => {
    const [displayModal, setDisplayModal] = useState(false);
    return (
        <div className="page-container">
            <div className="flex justify-content-between mb-3">
                <h1>Repertorio</h1>
                <CreateSong visible={displayModal} setVisible={setDisplayModal} />
            </div>
            <SongViewData />
        </div>
    )
}

export default Repertoire
