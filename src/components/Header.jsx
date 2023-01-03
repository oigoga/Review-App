import propTypes from 'prop-types'

function Header({text, bgcolor, textcolor}) {
    const headerStyle = {
        backgroundColor: bgcolor,
        color: textcolor,
    }

    return(
        <header style={headerStyle} className='head'>
            <div >
                <h1>
                    {text}
                </h1>
            </div>
        </header>
    )
}
Header.defaultProps = {
    text:'Review Application!',
    bgcolor: ' #ff8906',
    textcolor: '#fff'
}
Header.propTypes = {
    text: propTypes.string,
}
export default Header