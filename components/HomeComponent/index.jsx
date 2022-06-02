import DateField from "../../layout/DateField";
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";
import TimeField from "../../layout/TimeField";

export default function Home() {
    return (
        <>
            <div>Book your date</div>
            <TextField label='Name' placeholder='Enter your name' />
            <Dropdown label='Style' />
            <DateField label='Date' placeholder='Choose a date' />
            <TimeField label='Time' placeholder='Choose a time' />
            <SharedButton content='Reserve'></SharedButton>
        </>
    )
}