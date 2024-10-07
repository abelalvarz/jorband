import { Button } from 'primereact/button'

const PageHeader = ({ onClick }: any) => {
    return (
        <div className="flex justify-content-between align-items-center mb-3">
            <h1>Listados</h1>
            <Button label="Nuevo Listado" onClick={onClick} />
        </div>
    )
}

export default PageHeader
