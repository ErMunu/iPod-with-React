import "../assets/css/Music.css"

function Music(props) {
    const { musicItems, active } = props;
    return (
        <div className="music">
            <h3>Music</h3>
            <ul>
                {musicItems.map((element, index) => {
                    return active === index ?
                        <li key={index} className="active">&nbsp;{element}</li> :
                        <li key={index}>&nbsp;{element}</li>
                })}
            </ul>
        </div>

    )
}


export default Music;