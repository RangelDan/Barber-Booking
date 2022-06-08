const TextField = ({ 
    onChange, value, type, id, label, placeholder }) => (
        <div>
            <label>{`${label}: `}
                <input 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    id={id}
                    onChange={onChange}
                />
            </label>
        </div>
    )

export default TextField;

