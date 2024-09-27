import { Button } from 'primereact/button'
import React from 'react'

const PageHeader = ({ onClick }: any) => {
    return (
        <div className="flex justify-content-between mb-3">
            <h1>Listados</h1>
            <Button label="Nuevo Listado" onClick={onClick} />
        </div>
    )
}

export default PageHeader
