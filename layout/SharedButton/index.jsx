export default function SharedButton({ content, onclick }) {
    return (
        <button onClick={onclick} type='submit'>
            {content}
        </button>
    )
}