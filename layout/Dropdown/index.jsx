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
                </select>
            </label>
        </div>
    )

export default Dropdown;