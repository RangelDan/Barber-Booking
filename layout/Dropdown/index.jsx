export default function Dropdown({ label }) {
    return (
        <div>
            <label>{`${label}: `}
                <select>
                    {/* TODO: Move values to seperate file and reuse dropdown for times */}
                    <option> </option>            
                    <option value="Fade">Fade</option>
                    <option value="Mohawk">Mohawk</option>
                    <option value="Taper">Taper</option>
                    <option value="Combover">Combover</option>
                </select>
            </label>
        </div>
    )
}