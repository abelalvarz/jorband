import { Calendar } from 'primereact/calendar';

interface Props {
    value: any;
    onChange: (e: any) => void;
}

const ListTimeSetter = ({ value, onChange }: Props) => {

    return (
        <div>
            <div className="">
                <label htmlFor="buttondisplay" className=" block mb-2">
                    Fecha del Listado:
                </label>
                <Calendar
                    style={{ width: '100%' }}
                    value={value}
                    onChange={(e) => onChange(e)}
                    showIcon
                    // locale='es'
                    showTime
                    touchUI
                    hourFormat="12"
                />
            </div>
        </div>
    )
}

export default ListTimeSetter
