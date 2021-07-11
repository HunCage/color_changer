
const InputColor = ({ colorValue, setColorValue }) => {
    // const colorName = {input.value};

    return (
        <form onSubmit={(e) => e.preventDefault()}>
        <label>Add a Color Name:</label>
            <input
                id="colors"
                type="text"
                placeholder="Add a Color Name"
                value={colorValue}
                autoFocus
                required
                onChange={(e) => setColorValue(e.target.value)}
            />
        </form>
    )
}

export default InputColor
