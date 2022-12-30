function Header({salute}) {
    return(
        <header style={{backgroundColor: 'coral',
        color: 'black'}}>
            <div className="container">
                <h1>
                    {salute}
                </h1>
            </div>
        </header>
    )
}

export default Header