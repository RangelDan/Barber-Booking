export default function TimeField({ label, placeholder }) {
    return (
        <div>
            <label>{`${label}: `}
                <input type="time" placeholder={placeholder}/>
            </label>
        </div>
    )
}