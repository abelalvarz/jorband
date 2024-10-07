import { Button } from 'primereact/button'

interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export const Header = ({ visible, setVisible }: Props) => {
    return (
        <div className="header-container">
            <div className="app-name">
                <h1>JORBAND</h1>
            </div>
            <div className="burger-icon">
                {
                    visible ? (
                        <Button icon="pi pi-times" rounded onClick={() => setVisible(!visible)} severity="danger" text />
                    ) : (
                        <Button icon="pi pi-bars" rounded text onClick={() => setVisible(!visible)} />
                    )
                }
            </div>
        </div>
    )
}
