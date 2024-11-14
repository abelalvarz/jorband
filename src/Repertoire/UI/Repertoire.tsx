import { LayoutComponent } from "@/App/styled-components/LayoutComponent";
import { Header } from "./components/Header";
import { CreateSongDialog } from "./components/CreateSongDialog";
import { RepertoireTable } from "./components/RepertoireView";
import { useRepertoire } from "./hook/useRepertoire";

export const Repertoire = () => {
    const { visible, setVisible, saveSong, repertoire } = useRepertoire();
    return (
        <LayoutComponent>
            <Header setVisible={setVisible} />
            <CreateSongDialog visible={visible} setVisible={setVisible} saveSong={saveSong} />
            <RepertoireTable repertoire={repertoire} />
        </LayoutComponent>
    )
}

