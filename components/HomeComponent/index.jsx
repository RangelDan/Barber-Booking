import DateField from "../../layout/DateField";
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";
import TimeField from "../../layout/TimeField";

// TODO: Set up onChange to save values in state
// TODO: Read & write to next API as JSON
export default function Home() {
    return (
        <div>
            <h2>Book your date</h2>
            <TextField label='Name' placeholder='Enter your name' />
            <Dropdown label='Style' />
            <DateField label='Date' placeholder='Choose a date' />
            <TimeField label='Time' placeholder='Choose a time' />
            <div>
                <SharedButton content='Reserve'></SharedButton>
            </div>
            
        </div>
    )
}