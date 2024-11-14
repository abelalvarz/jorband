import { Button } from "primereact/button";

interface Props {
    setVisible: (value: boolean) => void;
}
export const Header = ({ setVisible }: Props) => {
    return (
        <div className="flex justify-content-between align-items-center mb-3">
            <h1>Repertorio</h1>
            <Button label="Agregar Canción" onClick={() => setVisible(true)} />
        </div>
    )
}
