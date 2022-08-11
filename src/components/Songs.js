function Songs(props) {
    const { songItems, active } = props;
    return (
        <div className="music">
            <h3>Songs</h3>
            <ul>
                {songItems.map(
                    (element, index) => {
                        return <li
                            key={index}
                            className={active === index ? 'active' : ''}
                            id="song1" >
                            {element}
                        </li>
                    })}
            </ul>
        </div>

    )
}


export default Songs;