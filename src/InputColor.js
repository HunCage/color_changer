
const InputColor = ({colorValue}) => {
    // const colorName = {input.value};

    return (
        <form>
            <input
                id="colors"
                type="text"
                value={colorValue}
            />
        </form>
    )
}

export default InputColor
