import { useState } from "react";
import CreateSong from "./components/CreateSong"
import SongViewData from "./components/SongViewData";

const Repertoire = () => {
    const [displayModal, setDisplayModal] = useState(false);
    return (
        <div>
            <h1>Repertorio</h1>
            <CreateSong visible={displayModal} setVisible={setDisplayModal} />
            <SongViewData />
        </div>
    )
}

export default Repertoire
