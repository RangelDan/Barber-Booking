const Dropdown = ({ 
    label, onChange, value, id, options 
    }) => (
        <div>
            <label>{`${label}: `}
                <select 
                    id={id} 
                    onBlur={onChange} 
                    value={value}
                >
                    {options?.map((optionText) => (
                        <option
                            value={optionText}
                            key={optionText}
                        >
                            {optionText}
                        </option>
                    ))}
                    {/* TODO: Move values to seperate file and reuse dropdown for times */}
                    {/* <option> </option>            
                    <option value="Fade">Fade</option>
                    <option value="Mohawk">Mohawk</option>
                    <option value="Taper">Taper</option>
                    <option value="Combover">Combover</option> */}
                </select>
            </label>
        </div>
    )

export default Dropdown;