
const Content = ({ colorValue }) => {

    return (
        <div className="square" style={{ backgroundColor: colorValue }}>
            <p>{colorValue ? colorValue : 'Empty Value'}</p>
        </div>
    )
}

Content.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Content;
