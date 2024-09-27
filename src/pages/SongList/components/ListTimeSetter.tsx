import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';

interface Props {
    listDate: {
        date: any;
        time: any;
    }
    setListDate: any;
}

const ListTimeSetter = ({ listDate, setListDate }: Props) => {

    const onChange = (e: any) => {
        console.log(e.target.value.toString());
        setListDate({ ...listDate, date: e.target.value })
    }
    return (
        <div>
            <div className="">
                <label htmlFor="buttondisplay" className=" block mb-2">
                    Fecha del Listado:
                </label>
                <Calendar
                    style={{ width: '100%' }}
                    value={listDate.date}
                    onChange={(e) => onChange(e)}
                    showIcon
                    // locale='es'
                    touchUI
                />
            </div>
            <div className="">
                <label htmlFor="buttondisplay" className="block mb-2">
                    Hora:
                </label>
                <InputText style={{ width: '100%' }} value={listDate.time} onChange={(e)=>setListDate({...listDate, time: e.target.value})}/>
            </div>
        </div>
    )
}

export default ListTimeSetter
