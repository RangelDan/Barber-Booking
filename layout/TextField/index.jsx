import styles from '../TextField/index.module.scss'

const TextField = ({ 
    onChange, value, type, id, label, placeholder }) => (
        <div className={styles.textField}>
            <label>
                {`${label}: `}
                <input 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    id={id}
                    onChange={onChange}
                    required
                />
            </label>
        </div>
    )

export default TextField;

