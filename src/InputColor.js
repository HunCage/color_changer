import colorNames from 'colornames';

const InputColor = ({ 
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText 
}) => {

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
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
            toggle text color
            </button>
        </form>
    )
}

export default InputColor
