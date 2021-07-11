
const Content = ({ colorValue, hexValue, isDarkText }) => {

    return (
        <div className="square" style={{ 
            backgroundColor: colorValue, 
            color: isDarkText ? "#000" : "#fff"
            }}>
            <p>{colorValue ? colorValue : 'Empty Value'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    )
}

Content.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Content;
