import Dropdown from "../../layout/Dropdown"
import TextField from "../../layout/TextField"
import { haircuts, openTimes } from '../../data/dropdownData'

export const Form = (onResChange, resData) => {
    return (
        <div>
                <TextField 
                    id='clientName'
                    type='text'
                    label='Name' 
                    placeholder='Enter your name' 
                    onChange={onResChange}
                    value={resData.name}
                />
                <Dropdown 
                    id='haircut'
                    label='Style' 
                    onChange={onResChange}
                    options={haircuts}
                />
                <TextField 
                    id='date'
                    type='date'
                    label='Date' 
                    placeholder='Choose a date'
                    onChange={onResChange}
                    value={resData.date}
                />
                <Dropdown 
                    id='time'
                    label='Time' 
                    onChange={onResChange}
                    options={openTimes}
                />
            </div>
    )
}