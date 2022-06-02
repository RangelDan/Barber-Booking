export default function DateField({ label, placeholder }) {
    return (
        <div>
            <label>{`${label}: `}
                <input type="date" placeholder={placeholder}/>
            </label>
        </div>
    )
}