export default function Dropdown({ label, placeholder }) {
    return (
        <div>
            <label>{`${label}: `}
                <select>
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