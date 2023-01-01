import propTypes from 'prop-types'

function Header({text, bgcolor, textcolor}) {
    const headerStyle = {
        backgroundColor: bgcolor,
        color: textcolor,
    }

    return(
        <header style={{headerStyle}} className='container'>
            <div className="container">
                <h1>
                    {text}
                </h1>
            </div>
        </header>
    )
}
Header.defaultProps = {
    text:'Review Application!',
    bgcolor: ' #FF6A95',
    textcolor: '#fff'
}
Header.propTypes = {
    text: propTypes.string,
}
export default Header