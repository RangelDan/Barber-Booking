import styles from '../Dropdown/index.module.scss'

const Dropdown = ({ 
    label, onChange, value, id, options 
    }) => (
        <div className={styles.dropDown}>
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