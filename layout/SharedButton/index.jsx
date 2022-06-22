export default function SharedButton({ content, onclick }) {
    return (
        <button onClick={onclick}>
            {content}
        </button>
    )
}