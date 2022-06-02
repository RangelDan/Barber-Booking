export default function TextField({ label, placeholder }) {
    return (
        <div>
            <label>{`${label}: `}
                <input type="text" placeholder={placeholder}/>
            </label>
        </div>
    )
}